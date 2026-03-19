import styled from "styled-components";

import { tokens } from "styles/tokens";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1023px;
  height: 48px;
  min-height: 48px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  min-height: 48px;
  padding: 0 40px 0 48px;
  border: 1px solid ${tokens.color.gray[400]};
  border-radius: ${tokens.radius.sm};
  font-size: ${tokens.typography.fontSize.base};
  background: ${tokens.color.gray[100]};
  box-sizing: border-box;

  &::placeholder {
    color: ${tokens.color.gray[500]};
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.color.gray[500]};
  pointer-events: none;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${tokens.color.gray[500]};
  cursor: pointer;
  padding: 0 8px;
  font-size: ${tokens.typography.fontSize.md};
  border-radius: ${tokens.radius.sm};
  transition: all ${tokens.transition.fast};

  &:hover {
    background: ${tokens.color.gray[200]};
    color: ${tokens.color.gray[600]};
  }
`;
