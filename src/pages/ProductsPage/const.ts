import type { SortKey } from "./components/ProductsTable/types";

export const SEARCH_DEBOUNCE_MS = 500;

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "title", label: "Наименование" },
  { key: "vendor", label: "Вендор" },
  { key: "sku", label: "Артикул" },
  { key: "rating", label: "Оценка" },
  { key: "price", label: "Цена" },
];
