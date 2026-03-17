import { useState } from "react";
import { FiPlus, FiRefreshCw } from "react-icons/fi";

import { ProductsTable, Search } from "./components";
import * as S from "./units";

import type { Product } from "@/api/product/types";
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from "@/api/queries/product";
import { useDebounce } from "@/hooks/useDebounce";

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const { data: allProducts = [], isLoading: isLoadingAll } =
    useGetProductsQuery();
  const { data: searchedProducts = [], isLoading: isLoadingSearch } =
    useSearchProductsQuery(debouncedSearch);

  const isSearching = Boolean(debouncedSearch.trim());

  const products: Product[] = isSearching ? searchedProducts : allProducts;
  const isLoading = isSearching ? isLoadingSearch : isLoadingAll;

  return (
    <S.PageWrapper>
      <S.PageHeader>
        <S.Title>Товары</S.Title>
        <Search
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery("")}
        />
      </S.PageHeader>

      <S.SectionWrapper>
        <S.SectionHeader>
          <S.SectionTitle>Все позиции</S.SectionTitle>
          <S.HeaderActions>
            <S.IconButton>
              <FiRefreshCw />
            </S.IconButton>
            <S.AddButton>
              <span>
                <FiPlus />
              </span>
              <span>Добавить</span>
            </S.AddButton>
          </S.HeaderActions>
        </S.SectionHeader>

        <ProductsTable products={products} isLoading={isLoading} />
      </S.SectionWrapper>
    </S.PageWrapper>
  );
};
