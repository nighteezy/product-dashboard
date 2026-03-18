import { useQuery, keepPreviousData } from "@tanstack/react-query";

import type { Product } from "../../product/types";
import { getProducts, searchProducts } from "../../product";

export const PRODUCTS_KEY = "products";

export const useGetProductsQuery = () => {
  return useQuery<Product[]>({
    queryKey: [PRODUCTS_KEY],
    queryFn: () => getProducts().then((res) => res.data.products),
  });
};

export const useSearchProductsQuery = (query: string) => {
  return useQuery<Product[]>({
    queryKey: [PRODUCTS_KEY, "search", query],
    queryFn: () => searchProducts(query).then((res) => res.data.products),

    enabled: Boolean(query),
    placeholderData: keepPreviousData,
  });
};
