/*
  # Add sitemap tracking table
  
  1. New Tables
    - `sitemap_entries`
      - `id` (uuid, primary key)
      - `url` (text, unique)
      - `priority` (numeric)
      - `changefreq` (text)
      - `last_modified` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on sitemap_entries table
    - Add policy for public read access
*/

-- Create sitemap_entries table
CREATE TABLE IF NOT EXISTS sitemap_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text UNIQUE NOT NULL,
  priority numeric NOT NULL CHECK (priority >= 0 AND priority <= 1),
  changefreq text NOT NULL CHECK (changefreq IN ('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never')),
  last_modified timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sitemap_entries ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public can view sitemap entries"
  ON sitemap_entries
  FOR SELECT
  TO anon
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_sitemap_entries_updated_at
  BEFORE UPDATE ON sitemap_entries
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

-- Create index on url
CREATE INDEX IF NOT EXISTS sitemap_entries_url_idx ON sitemap_entries(url);

-- Insert initial entries
INSERT INTO sitemap_entries (url, priority, changefreq) VALUES
  ('/', 1.0, 'daily'),
  ('/services', 0.9, 'weekly'),
  ('/about', 0.8, 'monthly'),
  ('/contact', 0.8, 'monthly'),
  ('/blog', 0.8, 'daily'),
  ('/locations', 0.8, 'weekly');