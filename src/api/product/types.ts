export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  brand: string;
  images: string | string[];
  thumbnail?: string;
  category: string;
  vendor?: string;
  sku?: string;
  stock?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
