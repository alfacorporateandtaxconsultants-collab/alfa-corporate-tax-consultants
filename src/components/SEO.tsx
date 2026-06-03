import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  breadcrumb?: Array<{ name: string; url: string }>;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://alfacorporateandtaxconsultants.com.pk/og-image.jpg',
  ogType = 'website',
  structuredData,
  breadcrumb,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('title', title, 'name');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('twitter:title', title, 'property');
    setMeta('twitter:description', description, 'property');
    setMeta('twitter:image', ogImage, 'property');

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Structured data
    const existing = document.getElementById('page-structured-data');
    if (existing) existing.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'page-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Breadcrumb structured data
    if (breadcrumb && breadcrumb.length > 0) {
      const existingBreadcrumb = document.getElementById('breadcrumb-structured-data');
      if (existingBreadcrumb) existingBreadcrumb.remove();

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };

      const script = document.createElement('script');
      script.id = 'breadcrumb-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    }

    return () => {
      const sd = document.getElementById('page-structured-data');
      if (sd) sd.remove();
      const bc = document.getElementById('breadcrumb-structured-data');
      if (bc) bc.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData, breadcrumb]);

  return null;
}
