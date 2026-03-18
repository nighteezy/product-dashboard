import type { AxiosPromise } from "axios";
import { api } from "..";
import type { ProductsResponse } from "./types";

export const getProducts = (): AxiosPromise<ProductsResponse> => {
  return api.get({
    url: "/products",
  });
};

export const searchProducts = (
  query: string,
): AxiosPromise<ProductsResponse> => {
  return api.get({
    url: `/products/search?q=${query}`,
  });
};
