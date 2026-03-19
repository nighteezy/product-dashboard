import styled from "styled-components";

import { tokens } from "styles/tokens";

export const TableContainer = styled.div`
  background: ${tokens.color.white};
  border-radius: ${tokens.radius.md};
  overflow: hidden;
`;

export const TableScrollWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;

  tbody {
    font-family: "Open Sans", sans-serif;
  }
`;

export const TableHeader = styled.th<{
  $center?: boolean;
  $checkbox?: boolean;
}>`
  padding: ${tokens.spacing.tableHeaderX} ${tokens.spacing[10]};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.color.gray[550]};
  background: ${tokens.color.white};
  ${({ $checkbox }) =>
    $checkbox &&
    `
    width: 48px;

  `}
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${tokens.color.gray[300]};
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
  position: relative;

  &:checked {
    background: ${tokens.color.selected};
    border-color: ${tokens.color.selected};
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${tokens.spacing[6]};
  margin-top: ${tokens.spacing[12]};
  padding: 0 ${tokens.spacing[3]};

  @media (max-width: ${tokens.breakpoint.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PaginationInfo = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.color.gray[600]};
`;

export const PaginationInfoNumbers = styled.span`
  color: ${tokens.color.black};
`;

export const PaginationButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing[1]};
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
  border: 1px solid
    ${({ $active }) =>
      $active ? tokens.color.paginationActive : tokens.color.gray[300]};
  background: ${({ $active }) =>
    $active ? tokens.color.paginationActive : tokens.color.white};
  color: ${({ $active }) =>
    $active ? tokens.color.white : tokens.color.gray[800]};
  border-radius: ${tokens.radius.sm};
  cursor: pointer;
  font-size: ${tokens.typography.fontSize.base};
  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${({ $active }) =>
      $active ? tokens.color.paginationActive : tokens.color.gray[100]};
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.spacing[6]};
  padding: ${tokens.spacing[24]};
  text-align: center;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${tokens.color.gray[300]};
  border-top-color: ${tokens.color.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingTitle = styled.span`
  font-size: ${tokens.typography.fontSize.base};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.color.gray[600]};
`;

export const EmptyCell = styled.td`
  padding: ${tokens.spacing[24]};
  text-align: center;
  color: ${tokens.color.gray[500]};
  font-size: ${tokens.typography.fontSize.base};
`;
