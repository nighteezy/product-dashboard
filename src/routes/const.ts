export const ROUTES = {
  LOGIN: "/",
  PRODUCTS: "/products",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
