import styled from "styled-components";

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  border-bottom: 1px solid #e0e0e0;
  background: #fafafa;
`;

export const TableRow = styled.tr`
  &:hover {
    background: #f9f9f9;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #1a1a1a;
`;

// Чекбокс
export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2f47e8;
`;

// Информация о товаре
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProductImage = styled.div`
  width: 48px;
  height: 48px;
  background: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductName = styled.div`
  font-weight: 500;
  color: #1a1a1a;
`;

export const ProductCategory = styled.div`
  font-size: 12px;
  color: #999;
`;

// Рейтинг
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #1a1a1a;
  font-weight: 500;
`;

// Цена
export const Price = styled.div`
  font-weight: 500;
  color: #1a1a1a;
`;

// Кнопки действий
export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

// Пагинация
export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 0 8px;
`;

export const PaginationInfo = styled.div`
  font-size: 14px;
  color: #666;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 4px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const LoadingWrapper = styled.div`
  padding: 40px;
  text-align: center;
`;

export const Loader = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4f46e5, #a5b4fc);
  animation: loading 1.2s infinite;

  @keyframes loading {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }
`;
