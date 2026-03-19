import styled from "styled-components";

import { tokens } from "styles/tokens";
import { sizes } from "./const";

export const StyledCheckbox = styled.input<{ $size?: keyof typeof sizes }>`
  width: ${({ $size = "md" }) => sizes[$size]};
  height: ${({ $size = "md" }) => sizes[$size]};
  min-width: ${({ $size = "md" }) => sizes[$size]};
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid ${tokens.color.gray[400]};
  border-radius: ${tokens.radius.sm};
  background: ${tokens.color.white};
  position: relative;

  &:checked {
    background: ${tokens.color.selected};
    border-color: ${tokens.color.gray[400]};
  }
`;
