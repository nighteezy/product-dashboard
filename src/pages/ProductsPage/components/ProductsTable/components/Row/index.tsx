import { FiMoreHorizontal, FiPackage, FiPlus } from "react-icons/fi";

import type { IProductRow } from "./types";
import { Checkbox } from "../../units";
import * as S from "./units";
import {
  formatPrice,
  getProductImage,
  getQuantityBars,
  isLowRating,
} from "./utils";

export const ProductRow = ({
  product,
  isSelected,
  onSelect,
}: IProductRow) => {
  const imageUrl = getProductImage(product);
  const vendor = product.vendor ?? product.brand ?? "—";
  const sku = product.sku ?? "N/A";
  const rating = product.rating ?? 0;
  const ratingIsLow = isLowRating(rating);
  const stock = product.stock ?? 0;
  const quantityBars = getQuantityBars(stock);

  return (
    <S.Row onClick={onSelect}>
      <S.CheckboxCell
        $selected={isSelected}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox type="checkbox" checked={isSelected} onChange={onSelect} />
      </S.CheckboxCell>
      <S.Cell>
        <S.ProductInfo>
          <S.ProductImage>
            {imageUrl ? (
              <img src={imageUrl} alt={product.title} />
            ) : (
              <FiPackage size={24} color="currentColor" />
            )}
          </S.ProductImage>
          <S.ProductDetails>
            <S.ProductName>{product.title}</S.ProductName>
            <S.ProductCategory>
              {product.category || "Категория"}
            </S.ProductCategory>
          </S.ProductDetails>
        </S.ProductInfo>
      </S.Cell>
      <S.Cell $center $bold>
        {vendor}
      </S.Cell>
      <S.Cell $center>{sku}</S.Cell>
      <S.Cell $center>
        <S.Rating>
          <S.RatingValue $isLow={ratingIsLow}>
            {rating.toFixed(1)}
          </S.RatingValue>
          /5
        </S.Rating>
      </S.Cell>
      <S.Cell $center>
        <S.Price>{formatPrice(product.price ?? 0)}</S.Price>
      </S.Cell>
      <S.Cell $center>
        <S.QuantityBars $filled={quantityBars}>
          <span />
          <span />
          <span />
        </S.QuantityBars>
      </S.Cell>
      <S.Cell $center onClick={(e) => e.stopPropagation()}>
        <S.ActionButtons>
          <S.ActionButtonPrimary type="button" title="Добавить">
            <FiPlus size={16} />
          </S.ActionButtonPrimary>
          <S.ActionButtonSecondary type="button" title="Ещё" disabled={true}>
            <FiMoreHorizontal size={16} />
          </S.ActionButtonSecondary>
        </S.ActionButtons>
      </S.Cell>
    </S.Row>
  );
};
