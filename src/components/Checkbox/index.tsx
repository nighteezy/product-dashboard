import { forwardRef } from "react";

import type { ICheckbox } from "./types";
import * as S from "./units";

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ size = "md", ...props }, ref) => (
    <S.StyledCheckbox ref={ref} type="checkbox" $size={size} {...props} />
  ),
);

Checkbox.displayName = "Checkbox";
