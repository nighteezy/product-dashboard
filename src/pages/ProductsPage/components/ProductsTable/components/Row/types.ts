import type { Product } from "api/product/types";

export interface ProductRowProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}
