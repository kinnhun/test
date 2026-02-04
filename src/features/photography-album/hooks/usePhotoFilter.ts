import { useCallback, useEffect, useMemo, useState } from "react";
import photosJson from "@/data/photography-album.json";

export type PhotoCategory = "all" | "wedding" | "graduation" | "personal" | "product-review";

export interface Photo {
  id: string;
  url: string;
  title: string;
  category: PhotoCategory;
  tags: string[];
  width: number;
  height: number;
}

const INITIAL_VISIBLE = 24;
const LOAD_MORE_STEP = 24;

function normalizeText(input: string) {
  // Lowercase + remove Vietnamese diacritics for robust full-text matching
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeQuery(query: string) {
  const normalized = normalizeText(query);
  if (!normalized) return [];
  return normalized.split(" ").filter(Boolean);
}

function normalizePhotos(input: unknown): Photo[] {
  if (!Array.isArray(input)) return [];
  const out: Photo[] = [];

  for (const item of input) {
    if (!item || typeof item !== "object") continue;
    const obj = item as Record<string, unknown>;

    const id = typeof obj.id === "string" ? obj.id : "";
    const url = typeof obj.url === "string" ? obj.url : "";
    const title = typeof obj.title === "string" ? obj.title : "";
    const category = obj.category as PhotoCategory;
    const tags = Array.isArray(obj.tags) ? (obj.tags.filter((t) => typeof t === "string") as string[]) : [];
    const width = typeof obj.width === "number" ? obj.width : 1000;
    const height = typeof obj.height === "number" ? obj.height : 1000;

    if (!id || !url || !title) continue;
    if (!["wedding", "graduation", "personal", "product-review"].includes(String(category))) continue;

    out.push({ id, url, title, category, tags, width, height });
  }

  return out;
}

export function usePhotoFilter() {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const photos = useMemo(() => normalizePhotos(photosJson), []);

  const filteredPhotos = useMemo(() => {
    let filtered = photos;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((photo) => photo.category === activeCategory);
    }

    // Full-text search (multi-token) across title + tags + category + id
    const tokens = tokenizeQuery(searchQuery);
    if (tokens.length > 0) {
      filtered = filtered.filter((photo) => {
        const haystack = normalizeText(
          [
            photo.title,
            photo.category,
            photo.id,
            ...(photo.tags ?? []),
          ].join(" ")
        );

        // Require all tokens to be present (AND search)
        return tokens.every((t) => haystack.includes(t));
      });
    }

    return filtered;
  }, [activeCategory, photos, searchQuery]);

  // reset window when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory, searchQuery]);

  const visiblePhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const hasMore = visibleCount < filteredPhotos.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredPhotos.length));
  }, [filteredPhotos.length]);

  const handleCategoryChange = useCallback((category: PhotoCategory) => {
    setActiveCategory(category);
  }, []);

  return {
    photos,
    filteredPhotos,
    visiblePhotos,
    activeCategory,
    searchQuery,
    totalItems: filteredPhotos.length,
    setActiveCategory: handleCategoryChange,
    setSearchQuery,
    loadMore,
    hasMore,
    visibleCount,
  };
}

