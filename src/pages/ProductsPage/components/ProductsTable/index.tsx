import { useEffect, useRef, useState, type FC } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import { NotFound } from "../NotFound";
import { ProductRow } from "./components";
import {
  ITEMS_PER_PAGE,
  TABLE_COLS_COUNT,
  VISIBLE_PAGE_BUTTONS,
} from "./const";
import type {
  IProductsTable,
  SortKey,
  SortOrder,
} from "./types";
import * as S from "./units";
import {
  getPaginatedSlice,
  getSelectAllNextState,
  getTotalPages,
  getVisiblePageNumbers,
  sortProducts,
  toggleSelection,
} from "./utils";

export const ProductsTable: FC<IProductsTable> = ({
  products,
  isLoading,
  sortKey: sortKeyProp = null,
  sortOrder: sortOrderProp = "asc",
  onSortChange,
}) => {
  const [internalSortKey, setInternalSortKey] = useState<SortKey | null>(null);
  const [internalSortOrder, setInternalSortOrder] = useState<SortOrder>("asc");

  const sortKey = onSortChange ? sortKeyProp : internalSortKey;
  const sortOrder = onSortChange ? sortOrderProp : internalSortOrder;

  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = sortProducts(products, sortKey, sortOrder);

  const totalCount = sortedProducts.length;
  const totalPages = getTotalPages(totalCount, ITEMS_PER_PAGE);
  const { items: paginatedProducts, startIndex, endIndex } = getPaginatedSlice(
    sortedProducts,
    currentPage,
    ITEMS_PER_PAGE,
  );

  const handleSort = (key: SortKey) => {
    const newOrder =
      sortKey === key ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    if (onSortChange) {
      onSortChange(key, newOrder);
    } else {
      setInternalSortKey(key);
      setInternalSortOrder(newOrder);
    }
  };

  const handleRowSelect = (productId: number) => {
    setSelectedIds((prev) => toggleSelection(prev, productId));
  };

  const handleSelectAll = () => {
    setSelectedIds((prev) =>
      getSelectAllNextState(
        prev,
        paginatedProducts.map((p) => p.id),
      ),
    );
  };

  const isAllSelected =
    paginatedProducts.length > 0 &&
    paginatedProducts.every((p) => selectedIds.has(p.id));
  const isSomeSelected = paginatedProducts.some((p) => selectedIds.has(p.id));

  const headerCheckboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const el = headerCheckboxRef.current;
    if (el) el.indeterminate = isSomeSelected && !isAllSelected;
  }, [isSomeSelected, isAllSelected]);

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) return null;
    return sortOrder === "asc" ? <FiArrowUp /> : <FiArrowDown />;
  };

  const isEmpty = !isLoading && sortedProducts.length === 0;

  return (
    <S.TableContainer>
      <S.TableScrollWrapper>
        <S.Table>
          <thead>
            <tr>
              <S.TableHeader
                $center
                $checkbox
                onClick={(e) => e.stopPropagation()}
              >
                <S.Checkbox
                  ref={headerCheckboxRef}
                  type="checkbox"
                  checked={isAllSelected}
                  disabled={isEmpty || isLoading}
                  onChange={handleSelectAll}
                />
              </S.TableHeader>
              <S.TableHeader onClick={() => handleSort("title")}>
                <S.SortableHeaderContent $alignLeft>
                  Наименование {renderSortIcon("title")}
                </S.SortableHeaderContent>
              </S.TableHeader>
              <S.TableHeader $center onClick={() => handleSort("vendor")}>
                <S.SortableHeaderContent>
                  Вендор {renderSortIcon("vendor")}
                </S.SortableHeaderContent>
              </S.TableHeader>
              <S.TableHeader $center onClick={() => handleSort("sku")}>
                <S.SortableHeaderContent>
                  Артикул {renderSortIcon("sku")}
                </S.SortableHeaderContent>
              </S.TableHeader>
              <S.TableHeader $center onClick={() => handleSort("rating")}>
                <S.SortableHeaderContent>
                  Оценка {renderSortIcon("rating")}
                </S.SortableHeaderContent>
              </S.TableHeader>
              <S.TableHeader $center onClick={() => handleSort("price")}>
                <S.SortableHeaderContent>
                  Цена, ₽ {renderSortIcon("price")}
                </S.SortableHeaderContent>
              </S.TableHeader>
              <S.TableHeader $center>Количество</S.TableHeader>
              <S.TableHeader $center></S.TableHeader>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <S.EmptyCell colSpan={TABLE_COLS_COUNT}>
                  <S.LoadingWrapper>
                    <S.Spinner />
                    <S.LoadingTitle>Загрузка данных</S.LoadingTitle>
                  </S.LoadingWrapper>
                </S.EmptyCell>
              </tr>
            ) : isEmpty ? (
              <S.TableRow>
                <S.EmptyCell colSpan={TABLE_COLS_COUNT}>
                  <NotFound />
                </S.EmptyCell>
              </S.TableRow>
            ) : (
              paginatedProducts.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  isSelected={selectedIds.has(product.id)}
                  onSelect={() => handleRowSelect(product.id)}
                />
              ))
            )}
          </tbody>
        </S.Table>
      </S.TableScrollWrapper>

      <S.Pagination>
        <S.PaginationInfo>
          Показано{" "}
          <S.PaginationInfoNumbers>
            {isEmpty ? 0 : startIndex + 1}-{endIndex}
          </S.PaginationInfoNumbers>{" "}
          из <S.PaginationInfoNumbers>{totalCount}</S.PaginationInfoNumbers>
        </S.PaginationInfo>
        <S.PaginationButtons>
          <S.PageButton
            type="button"
            $active={false}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            ‹
          </S.PageButton>
          {getVisiblePageNumbers(
            currentPage,
            totalPages,
            VISIBLE_PAGE_BUTTONS,
          ).map((page) => (
            <S.PageButton
              key={page}
              type="button"
              $active={currentPage === page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </S.PageButton>
          ))}
          <S.PageButton
            type="button"
            $active={false}
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages, p + 1))
            }
          >
            ›
          </S.PageButton>
        </S.PaginationButtons>
      </S.Pagination>
    </S.TableContainer>
  );
};
