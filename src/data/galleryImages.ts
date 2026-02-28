// src/data/galleryImages.ts
// Auto-load all images inside src/gallery (jpg/png/webp/avif/svg)
// Works in Vite

const modules: Record<string, { default: string }> = import.meta.glob('../gallery/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
});

export const galleryImages: string[] = Object.values(modules)
  .map((mod) => mod.default)
  // optional: stable ordering
  .sort((a, b) => a.localeCompare(b));