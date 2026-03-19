import type { Product } from "api/product/types";

export interface ProductsTableProps {
  products: Product[];
  isLoading: boolean;
  sortKey?: SortKey | null;
  sortOrder?: SortOrder;
  onSortChange?: (key: SortKey | null, order: SortOrder) => void;
}

export type SortKey = "title" | "vendor" | "sku" | "rating" | "price";
export type SortOrder = "asc" | "desc";
