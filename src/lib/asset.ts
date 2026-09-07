/** Prefix site-root paths with Vite `base` so GitHub Pages project URLs work. */
export function asset(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!base) return path;
  if (path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}

export function withPublicBase<T>(value: T): T {
  const walk = (v: unknown): unknown => {
    if (typeof v === "string" && (v.startsWith("/images/") || v.startsWith("/files/") || v.startsWith("/favicon"))) {
      return asset(v);
    }
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === "object") {
      return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, val]) => [k, walk(val)]));
    }
    return v;
  };
  return walk(value) as T;
}
