import { useState } from "react";
import {
  FiBell,
  FiGlobe,
  FiMail,
  FiPlusCircle,
  FiRefreshCw,
  FiSettings,
} from "react-icons/fi";
import toast from "react-hot-toast";

import { AddProductForm } from "./components/Modal/AddProductForm";
import {
  FilterDropdown,
  Modal,
  ProductsTable,
  Search,
} from "./components";
import { SEARCH_DEBOUNCE_MS } from "./const";
import * as S from "./units";
import {
  getIsLoadingForDisplay,
  getProductsForDisplay,
  isSearchActive,
} from "./utils";

import type { AddProductFormData } from "./components/Modal/AddProductForm/types";
import type {
  SortKey,
  SortOrder,
} from "./components/ProductsTable/types";
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from "api/queries/product";
import { useDebounce } from "hooks/useDebounce";

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const debouncedSearch = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);

  const { data: allProducts = [], isLoading: isLoadingAll, refetch: refetchAll } =
    useGetProductsQuery();
  const {
    data: searchedProducts = [],
    isLoading: isLoadingSearch,
    refetch: refetchSearch,
  } = useSearchProductsQuery(debouncedSearch);

  const isSearching = isSearchActive(debouncedSearch);
  const products = getProductsForDisplay(
    isSearching,
    allProducts,
    searchedProducts,
  );
  const isLoading = getIsLoadingForDisplay(
    isSearching,
    isLoadingAll,
    isLoadingSearch,
  );

  const handleAddProduct = (_data: AddProductFormData) => {
    toast.success("Товар успешно добавлен");
    setIsAddModalOpen(false);
  };

  const handleSortChange = (key: SortKey | null, order: SortOrder) => {
    setSortKey(key);
    setSortOrder(order);
  };

  const handleRefresh = () => {
    refetchAll();
    if (debouncedSearch.trim()) refetchSearch();
  };

  return (
    <S.PageWrapper>
      <S.PageHeader>
        <S.PageHeaderLeft>
          <S.Title>Товары</S.Title>
        </S.PageHeaderLeft>
        <S.PageHeaderSearchSlot>
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        </S.PageHeaderSearchSlot>
        <S.PageHeaderRight>
          <S.HeaderIconButton type="button" title="Язык">
            <FiGlobe size={22} />
          </S.HeaderIconButton>
          <S.HeaderIconButton type="button" title="Уведомления">
            <FiBell size={22} />
            <S.HeaderIconBadge>12</S.HeaderIconBadge>
          </S.HeaderIconButton>
          <S.HeaderIconButton type="button" title="Сообщения">
            <FiMail size={22} />
          </S.HeaderIconButton>
          <S.HeaderIconButton type="button" title="Настройки">
            <FiSettings size={22} />
          </S.HeaderIconButton>
        </S.PageHeaderRight>
      </S.PageHeader>

      <S.SectionWrapper>
        <S.SectionHeader>
          <S.SectionTitle>Все позиции</S.SectionTitle>
          <S.HeaderActions>
            <S.IconButton type="button" title="Обновить" onClick={handleRefresh}>
              <FiRefreshCw size={22} />
            </S.IconButton>
            <FilterDropdown
              sortKey={sortKey}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
            />
            <S.AddButton
              type="button"
              onClick={() => setIsAddModalOpen(true)}
            >
              <FiPlusCircle size={22} />
              <span>Добавить</span>
            </S.AddButton>
          </S.HeaderActions>
        </S.SectionHeader>

        <ProductsTable
          products={products}
          isLoading={isLoading}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />

        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Добавить товар"
        >
          <AddProductForm onSubmit={handleAddProduct} />
        </Modal>
      </S.SectionWrapper>
    </S.PageWrapper>
  );
};
