import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: string;
  structuredData?: object | object[];
}

const SITE_URL = 'https://ramkrishnaupadhyay.dev';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = 'https://bolt.new/static/og_default.png',
  type = 'website',
  structuredData,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullTitle = title.includes('Ramkrishna Upadhyay') ? title : `${title} | Ramkrishna Upadhyay`;
  const canonical = `${SITE_URL}${canonicalPath || pathname}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setLink('canonical', canonical);

    // Remove previous structured data
    document.querySelectorAll('script[data-structured]').forEach((s) => s.remove());

    // Add new structured data
    if (structuredData) {
      const data = Array.isArray(structuredData) ? structuredData : [structuredData];
      data.forEach((obj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-structured', 'true');
        script.textContent = JSON.stringify(obj);
        document.head.appendChild(script);
      });
    }

    window.scrollTo(0, 0);
  }, [fullTitle, description, keywords, canonical, ogImage, type, structuredData]);

  return null;
}
