import type { Product } from "api/product/types";

import type {
  SortKey,
  SortOrder,
} from "./types";

const getSortValue = (p: Product, sortKey: SortKey): string | number => {
  if (sortKey === "vendor") return p.vendor ?? p.brand ?? "";
  if (sortKey === "title" || sortKey === "sku")
    return (p[sortKey] ?? "") as string;
  return (p[sortKey] ?? 0) as number;
};

export const sortProducts = (
  products: Product[],
  sortKey: SortKey | null,
  sortOrder: SortOrder,
): Product[] => {
  if (!sortKey) return products;
  return [...products].sort((a, b) => {
    const aValue = getSortValue(a, sortKey);
    const bValue = getSortValue(b, sortKey);

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortOrder === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
};

export const getTotalPages = (
  totalCount: number,
  itemsPerPage: number,
): number => Math.ceil(totalCount / itemsPerPage) || 1;

export const getVisiblePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisible: number,
): number[] => {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const getPaginatedSlice = <T>(
  items: T[],
  page: number,
  itemsPerPage: number,
): { items: T[]; startIndex: number; endIndex: number } => {
  const startIndex = (page - 1) * itemsPerPage;
  const itemsSlice = items.slice(startIndex, startIndex + itemsPerPage);
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  return { items: itemsSlice, startIndex, endIndex };
};

export const toggleSelection = (prev: Set<number>, id: number): Set<number> => {
  const next = new Set(prev);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
};

export const getSelectAllNextState = (
  prev: Set<number>,
  ids: number[],
): Set<number> => {
  const allSelected = ids.length > 0 && ids.every((id) => prev.has(id));
  return allSelected ? new Set<number>() : new Set(ids);
};
