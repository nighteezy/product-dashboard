import styled from "styled-components";

import { tokens } from "styles/tokens";

export const FieldWrapper = styled.div``;

export const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.color.gray[800]};
  margin-bottom: ${tokens.spacing[2]};
  display: block;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const InputGroup = styled.div<{ $hasError?: boolean }>`
  position: relative;
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? tokens.color.error : tokens.color.gray[300]};
  border-radius: ${tokens.radius.md};
  transition: all ${tokens.transition.fast};

  &:focus-within {
    outline: none;
    border-color: ${({ $hasError }) =>
      $hasError ? tokens.color.error : tokens.color.primary};
    box-shadow: 0 0 0 3px
      ${({ $hasError }) =>
        $hasError ? tokens.color.errorFocus : tokens.color.primaryFocus};
  }
`;

export const BorderError = styled.span`
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 ${tokens.spacing[3]};
  background: ${tokens.color.white};
  color: ${tokens.color.error};
  font-size: ${tokens.typography.fontSize.xs};
  white-space: nowrap;
  z-index: 1;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${tokens.radius.md};
`;

export const LeftIcon = styled.span`
  position: absolute;
  left: 14px;
  color: ${tokens.color.gray[500]};
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const RightSlot = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;

  & button {
    background: none;
    border: none;
    color: ${tokens.color.gray[500]};
    cursor: pointer;
    padding: ${tokens.spacing[1]};
    display: flex;
    align-items: center;

    &:hover {
      color: ${tokens.color.gray[600]};
    }
  }
`;

export const Input = styled.input<{ $hasLeftIcon?: boolean; $hasRightSlot?: boolean }>`
  font-family: "Inter", sans-serif;
  width: 100%;
  padding: 14px;
  padding-left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? "48px" : "16px")};
  padding-right: ${({ $hasRightSlot }) => ($hasRightSlot ? "48px" : "16px")};
  border: none;
  border-radius: ${tokens.radius.md};
  font-size: ${tokens.typography.fontSize.md};
  background: ${tokens.color.white};
  outline: none;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::placeholder {
    color: ${tokens.color.gray[500]};
  }
`;
