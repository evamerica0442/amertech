import { SITE_URL } from '../config/site';

/** Resolve a root-relative path to an absolute URL using SITE_URL. */
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return new URL(clean, SITE_URL).toString();
}

/** Trailing-slash-normalised internal path (clean URLs, consistent). */
export function normalizePath(path: string): string {
  if (path.endsWith('.html') || path.endsWith('.php')) return path;
  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}
