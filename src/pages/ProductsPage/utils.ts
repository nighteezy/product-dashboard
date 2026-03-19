import type { Product } from "api/product/types";

export const isSearchActive = (debouncedSearch: string): boolean =>
  Boolean(debouncedSearch.trim());

export const getProductsForDisplay = (
  isSearching: boolean,
  allProducts: Product[],
  searchedProducts: Product[]
): Product[] => (isSearching ? searchedProducts : allProducts);

export const getIsLoadingForDisplay = (
  isSearching: boolean,
  isLoadingAll: boolean,
  isLoadingSearch: boolean
): boolean => (isSearching ? isLoadingSearch : isLoadingAll);
