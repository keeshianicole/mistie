import { useEffect } from 'react';

const SitemapPage = () => {
  useEffect(() => {
    const fetchAndRedirectToSitemap = async () => {
      try {
        const baseUrl = import.meta.env.VITE_SUPABASE_URL;
        const response = await fetch(`${baseUrl}/functions/v1/sitemap`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const xml = await response.text();
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        window.location.href = url;
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchAndRedirectToSitemap();
  }, []);

  return null;
};

export default SitemapPage;