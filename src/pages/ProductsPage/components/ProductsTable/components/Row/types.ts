import type { Product } from "api/product/types";

export interface IProductRow {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}
