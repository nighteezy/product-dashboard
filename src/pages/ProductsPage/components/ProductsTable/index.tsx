import { useMemo, useState, type FC } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import type { ProductsTableProps, SortKey, SortOrder } from "./types";
import * as S from "./units";

export const ProductsTable: FC<ProductsTableProps> = ({
  products,
  isLoading,
}) => {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  // Сортировка
  const sortedProducts = useMemo(() => {
    if (!sortKey) return products;

    return [...products].sort((a, b) => {
      const aValue =
        a[sortKey] ??
        (sortKey === "title" || sortKey === "vendor" || sortKey === "sku"
          ? ""
          : 0);
      const bValue =
        b[sortKey] ??
        (sortKey === "title" || sortKey === "vendor" || sortKey === "sku"
          ? ""
          : 0);

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortOrder === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [products, sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) return null;
    return sortOrder === "asc" ? <FiArrowUp /> : <FiArrowDown />;
  };

  const isEmpty = !isLoading && sortedProducts.length === 0;

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>
              <S.Checkbox type="checkbox" />
            </S.TableHeader>
            <S.TableHeader onClick={() => handleSort("title")}>
              Наименование {renderSortIcon("title")}
            </S.TableHeader>
            <S.TableHeader onClick={() => handleSort("vendor")}>
              Вендор {renderSortIcon("vendor")}
            </S.TableHeader>
            <S.TableHeader onClick={() => handleSort("sku")}>
              Артикул {renderSortIcon("sku")}
            </S.TableHeader>
            <S.TableHeader onClick={() => handleSort("rating")}>
              Оценка {renderSortIcon("rating")}
            </S.TableHeader>
            <S.TableHeader onClick={() => handleSort("price")}>
              Цена, ₽ {renderSortIcon("price")}
            </S.TableHeader>
            <S.TableHeader></S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <S.LoadingWrapper>
              <S.Loader />
            </S.LoadingWrapper>
          ) : isEmpty ? (
            <S.TableRow>
              <S.TableCell
                colSpan={7}
                style={{ textAlign: "center", padding: "40px", color: "#999" }}
              >
                🔍 Товары не найдены
              </S.TableCell>
            </S.TableRow>
          ) : (
            sortedProducts.map((product) => (
              <S.TableRow key={product.id}>
                <S.TableCell>
                  <S.Checkbox type="checkbox" />
                </S.TableCell>
                <S.TableCell>
                  <S.ProductInfo>
                    <S.ProductImage>
                      {product.images ? (
                        <img src={product.images} alt={product.title} />
                      ) : (
                        <span>📦</span>
                      )}
                    </S.ProductImage>
                    <S.ProductDetails>
                      <S.ProductName>{product.title}</S.ProductName>
                      <S.ProductCategory>
                        {product.category || "Категория"}
                      </S.ProductCategory>
                    </S.ProductDetails>
                  </S.ProductInfo>
                </S.TableCell>
                <S.TableCell>{product.vendor || "Vendor"}</S.TableCell>
                <S.TableCell>{product.sku || "N/A"}</S.TableCell>
                <S.TableCell>
                  <S.Rating>
                    <span>⭐</span>
                    <span>{product.rating?.toFixed(1) || "0.0"}</span>
                  </S.Rating>
                </S.TableCell>
                <S.TableCell>
                  <S.Price>{product.price?.toFixed(2) || "0.00"}</S.Price>
                </S.TableCell>
                <S.TableCell>
                  <S.ActionButtons>
                    <S.ActionButton>+</S.ActionButton>
                    <S.ActionButton>🗑</S.ActionButton>
                  </S.ActionButtons>
                </S.TableCell>
              </S.TableRow>
            ))
          )}
        </tbody>
      </S.Table>

      <S.Pagination>
        <S.PaginationInfo>
          Показано 1-20 из {sortedProducts.length}
        </S.PaginationInfo>
        <S.PaginationButtons>
          <S.PageButton>&lt;</S.PageButton>
          <S.PageButton>1</S.PageButton>
          <S.PageButton>2</S.PageButton>
          <S.PageButton>3</S.PageButton>
          <S.PageButton>4</S.PageButton>
          <S.PageButton>5</S.PageButton>
          <S.PageButton>&gt;</S.PageButton>
        </S.PaginationButtons>
      </S.Pagination>
    </S.TableContainer>
  );
};
