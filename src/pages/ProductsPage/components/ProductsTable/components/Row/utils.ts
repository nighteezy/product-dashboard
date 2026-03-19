import type { Product } from "api/product/types";

import {
  LOW_RATING_THRESHOLD,
  STOCK_LEVEL_LOW,
  STOCK_LEVEL_MEDIUM,
} from "./const";

export const getQuantityBars = (stock: number): 1 | 2 | 3 => {
  if (stock <= STOCK_LEVEL_LOW) return 1;
  if (stock < STOCK_LEVEL_MEDIUM) return 2;
  return 3;
};

export const getProductImage = (product: Product): string | null => {
  if (product.thumbnail) return product.thumbnail;
  if (Array.isArray(product.images) && product.images[0])
    return product.images[0];
  if (typeof product.images === "string") return product.images;
  return null;
};

export const formatPrice = (value: number): string => {
  const [int, dec] = value.toFixed(2).split(".");
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, " ")},${dec}`;
};

export const isLowRating = (rating: number): boolean =>
  rating < LOW_RATING_THRESHOLD;
