import styled from "styled-components";

import { tokens } from "styles/tokens";

export const Row = styled.tr`
  border-bottom: 1px solid ${tokens.color.gray[300]};
  cursor: pointer;

  &:hover {
    background: ${tokens.color.gray[100]};
  }
`;

export const CheckboxCell = styled.td<{ $selected?: boolean }>`
  position: relative;
  padding: ${tokens.spacing[8]};
  font-size: 16px;
  font-weight: ${tokens.typography.fontWeight.normal};
  color: ${tokens.color.gray[800]};
  text-align: center;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  box-sizing: border-box;

  &::before {
    content: "";
    display: ${({ $selected }) => ($selected ? "block" : "none")};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${tokens.color.selected};
  }
`;

export const Cell = styled.td<{ $center?: boolean; $bold?: boolean }>`
  padding: ${tokens.spacing.tableCellX} ${tokens.spacing[10]};
  font-size: 16px;
  font-weight: ${({ $bold }) =>
    $bold
      ? tokens.typography.fontWeight.bold
      : tokens.typography.fontWeight.normal};
  color: ${tokens.color.gray[800]};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  min-width: 18px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid ${tokens.color.gray[400]};
  border-radius: 4px;
  background: ${tokens.color.white};

  &:checked {
    background: ${tokens.color.selected};
    border-color: ${tokens.color.selected};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${tokens.spacing[6]};
`;

export const ProductImage = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  background: ${tokens.color.gray[300]};
  border-radius: ${tokens.spacing[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${tokens.color.gray[500]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: 1.25;
  color: ${tokens.color.gray[800]};
`;

export const ProductCategory = styled.div`
  font-size: 14px;
  font-weight: ${tokens.typography.fontWeight.normal};
  line-height: 1.25;
  color: ${tokens.color.gray[650]};
`;

export const Rating = styled.span`
  font-weight: ${tokens.typography.fontWeight.normal};
  color: ${tokens.color.gray[800]};
`;

export const RatingValue = styled.span<{ $isLow?: boolean }>`
  color: ${({ $isLow }) =>
    $isLow ? tokens.color.error : tokens.color.gray[800]};
`;

export const Price = styled.span`
  font-family: "Roboto Mono", monospace;
  display: inline-block;
  white-space: nowrap;
  font-weight: ${tokens.typography.fontWeight.normal};
  color: ${tokens.color.gray[800]};
`;

export const QuantityBars = styled.div<{ $filled: number }>`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
  height: 20px;

  & span {
    width: 4px;
    height: 16px;
    border-radius: 2px;
    background: ${tokens.color.gray[400]};
    transition: background ${tokens.transition.fast};
  }

  & span:nth-child(-n + ${({ $filled }) => $filled}) {
    background: ${tokens.color.gray[500]};
  }
`;

export const ActionButtons = styled.div`
  display: inline-flex;
  gap: ${tokens.spacing[3]};
  align-items: center;
`;

export const ActionButtonPrimary = styled.button`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: ${tokens.radius.full};
  border: none;
  background: ${tokens.color.primary};
  color: ${tokens.color.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.primaryHover};
  }
`;

export const ActionButtonSecondary = styled.button`
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: ${tokens.radius.full};
  border: 1px solid ${tokens.color.gray[300]};
  background: ${tokens.color.white};
  color: ${tokens.color.gray[600]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
