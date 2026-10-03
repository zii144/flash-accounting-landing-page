// next/image src and metadata icon URLs are NOT prefixed with basePath by
// Next.js — prepend it explicitly for the GitHub Pages fallback's subpath deployment.
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
