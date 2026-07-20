// next/image src and metadata icon URLs are NOT prefixed with basePath by
// Next.js — prepend it explicitly for GitHub Pages subpath deployments.
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
