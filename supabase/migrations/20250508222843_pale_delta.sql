/*
  # Initial Schema Setup for NJ Sump Pump Experts

  1. New Tables
    - customers
      - Basic customer information and contact details
    - service_requests
      - Service request details and status tracking
    - testimonials
      - Customer reviews and testimonials
    - service_types
      - Available service categories
    - service_areas
      - Coverage areas in Bergen County

  2. Security
    - RLS policies for each table
    - Authenticated users can only access their own data
    - Public read access for testimonials
*/

-- Create service types enum
CREATE TYPE service_type AS ENUM (
  'repair',
  'installation',
  'maintenance',
  'emergency',
  'backup_installation'
);

-- Create service status enum
CREATE TYPE service_status AS ENUM (
  'pending',
  'scheduled',
  'in_progress',
  'completed',
  'cancelled'
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text,
  city text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create service_requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id),
  service_type service_type NOT NULL,
  status service_status DEFAULT 'pending',
  description text,
  preferred_date date,
  preferred_time_range text,
  is_emergency boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id),
  service_request_id uuid REFERENCES service_requests(id),
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  approved_at timestamptz
);

-- Create service_areas table
CREATE TABLE IF NOT EXISTS service_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_name text NOT NULL UNIQUE,
  is_active boolean DEFAULT true,
  response_time_minutes integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_areas ENABLE ROW LEVEL SECURITY;

-- Customers policies
CREATE POLICY "Users can view own customer profile"
  ON customers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own customer profile"
  ON customers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Service requests policies
CREATE POLICY "Users can view own service requests"
  ON service_requests
  FOR SELECT
  TO authenticated
  USING (customer_id IN (
    SELECT id FROM customers WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can create service requests"
  ON service_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (customer_id IN (
    SELECT id FROM customers WHERE user_id = auth.uid()
  ));

-- Testimonials policies
CREATE POLICY "Public can view approved testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (approved_at IS NOT NULL);

CREATE POLICY "Users can create testimonials for their service requests"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (service_request_id IN (
    SELECT id FROM service_requests
    WHERE customer_id IN (
      SELECT id FROM customers WHERE user_id = auth.uid()
    )
  ));

-- Service areas policies
CREATE POLICY "Public can view active service areas"
  ON service_areas
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_service_requests_updated_at
  BEFORE UPDATE ON service_requests
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_service_areas_updated_at
  BEFORE UPDATE ON service_areas
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

-- Create indexes
CREATE INDEX IF NOT EXISTS customers_user_id_idx ON customers(user_id);
CREATE INDEX IF NOT EXISTS service_requests_customer_id_idx ON service_requests(customer_id);
CREATE INDEX IF NOT EXISTS service_requests_status_idx ON service_requests(status);
CREATE INDEX IF NOT EXISTS testimonials_customer_id_idx ON testimonials(customer_id);
CREATE INDEX IF NOT EXISTS testimonials_approved_at_idx ON testimonials(approved_at);