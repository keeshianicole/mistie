/*
  # Add blog post entries to sitemap

  1. New Entries
    - Add blog post URLs to sitemap_entries table
    - Set appropriate priorities and change frequencies
*/

-- Insert blog post entries
INSERT INTO sitemap_entries (url, priority, changefreq) VALUES
  ('/blog/choosing-right-sump-pump-size', 0.7, 'monthly'),
  ('/blog/winter-sump-pump-maintenance', 0.7, 'monthly'),
  ('/blog/smart-sump-pump-monitoring', 0.7, 'monthly'),
  ('/blog/commercial-sump-pump-solutions', 0.7, 'monthly'),
  ('/blog/sump-pump-pit-design', 0.7, 'monthly'),
  ('/blog/sump-pump-troubleshooting', 0.7, 'monthly'),
  ('/blog/sump-pump-noise-reduction', 0.7, 'monthly'),
  ('/blog/sump-pump-lifespan-extension', 0.7, 'monthly'),
  ('/blog/sump-pump-power-backup', 0.7, 'monthly'),
  ('/blog/sump-pump-myths', 0.7, 'monthly');