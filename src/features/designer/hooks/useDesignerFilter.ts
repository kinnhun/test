import { useCallback, useEffect, useMemo, useState } from "react";
import dataJson from "@/data/designer-portfolio.json";

export type DesignerCategory = "all" | "poster" | "logo" | "web" | "menu" | "app";

export interface DesignerProject {
  id: string;
  title: string;
  category: DesignerCategory;
  tags: string[];
  thumb: string;
  width: number;
  height: number;
}

interface DesignerCategoryOption {
  value: DesignerCategory;
  label: string;
}

interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  items: string[];
  highlight?: boolean;
}

function normalizeText(input: string) {
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

function safeArray<T>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]) : [];
}

function normalizeData() {
  const root = dataJson as unknown as Record<string, unknown>;
  const categories = safeArray<DesignerCategoryOption>(root.categories);
  const projects = safeArray<DesignerProject>(root.projects);
  const pricing = safeArray<PricingTier>(root.pricing);

  return { categories, projects, pricing };
}

const INITIAL_VISIBLE = 24;
const LOAD_MORE_STEP = 24;

export function useDesignerFilter() {
  const { categories, projects, pricing } = useMemo(() => normalizeData(), []);

  const [activeCategory, setActiveCategory] =
    useState<DesignerCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    const tokens = tokenizeQuery(searchQuery);
    if (tokens.length > 0) {
      filtered = filtered.filter((p) => {
        const haystack = normalizeText(
          [p.title, p.category, p.id, ...(p.tags ?? [])].join(" ")
        );
        return tokens.every((t) => haystack.includes(t));
      });
    }

    return filtered;
  }, [activeCategory, projects, searchQuery]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory, searchQuery]);

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, filteredProjects.length)
    );
  }, [filteredProjects.length]);

  const handleCategoryChange = useCallback((c: DesignerCategory) => {
    setActiveCategory(c);
  }, []);

  return {
    categories,
    pricing,
    projects,
    filteredProjects,
    visibleProjects,
    activeCategory,
    setActiveCategory: handleCategoryChange,
    searchQuery,
    setSearchQuery,
    visibleCount,
    totalItems: filteredProjects.length,
    hasMore,
    loadMore,
  };
}


