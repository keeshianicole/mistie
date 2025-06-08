import { createClient } from 'npm:@supabase/supabase-js@2.39.8';

const baseUrl = Deno.env.get('SITE_URL') || 'https://clovermist.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/xml',
  'Cache-Control': 'no-cache'
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  if (req.method !== 'GET') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    // Get sitemap entries from database
    const { data: sitemapEntries, error: sitemapError } = await supabase
      .from('sitemap_entries')
      .select('*')
      .order('priority', { ascending: false })
      .throwOnError();

    if (sitemapError) throw sitemapError;

    // Get active service areas (cities)
    const { data: serviceAreas, error: areasError } = await supabase
      .from('service_areas')
      .select('city_name')
      .eq('is_active', true)
      .throwOnError();

    if (areasError) throw areasError;

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    sitemapEntries?.forEach(entry => {
      xml += `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${new Date(entry.last_modified).toISOString()}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>\n`;
    });

    // Add dynamic location pages for active service areas
    serviceAreas?.forEach(area => {
      const citySlug = area.city_name.toLowerCase().replace(/\s+/g, '-');
      xml += `  <url>
    <loc>${baseUrl}/locations/${citySlug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
    });

    xml += '</urlset>';

    return new Response(xml, {
      headers: corsHeaders,
      status: 200
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { 
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain'
      }
    });
  }
});