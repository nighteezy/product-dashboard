import type { Product } from "../../../../api/product/types";

export interface ProductsTableProps {
  products: Product[];
  isLoading: boolean;
}

export type SortKey = "title" | "vendor" | "sku" | "rating" | "price";
export type SortOrder = "asc" | "desc";
