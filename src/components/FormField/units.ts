import styled from "styled-components";

import { tokens } from "styles/tokens";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
`;

export const Label = styled.label`
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.color.gray[800]};

  line-height: 1.5;
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
`;

const IconBase = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${tokens.color.gray[500]};
`;

export const LeftIcon = styled(IconBase)`
  left: 14px;
`;

export const RightSlot = styled(IconBase)`
  right: 14px;

  & button {
    background: none;
    border: none;
    color: ${tokens.color.gray[500]};
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: ${tokens.color.gray[600]};
    }
  }
`;

export const Input = styled.input<{
  $hasLeftIcon?: boolean;
  $hasRightSlot?: boolean;
}>`
  width: 100%;
  padding: 14px;
  padding-left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? "48px" : "14px")};
  padding-right: ${({ $hasRightSlot }) => ($hasRightSlot ? "48px" : "14px")};
  border: none;
  border-radius: ${tokens.radius.md};
  font-size: ${tokens.typography.fontSize.md};

  line-height: 1.5;

  &::placeholder {
    color: ${tokens.color.gray[500]};
  }
`;
