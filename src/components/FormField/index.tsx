import type { FormFieldProps } from "./types";
import * as S from "./units";

export const FormField = ({
  label,
  id,
  error,
  leftIcon,
  rightSlot,
  inputProps,
}: FormFieldProps) => {
  return (
    <S.FieldWrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.InputGroup $hasError={!!error}>
        {error && <S.BorderError role="alert">{error}</S.BorderError>}
        <S.InputWrapper>
          {leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}
          <S.Input
            id={id}
            $hasLeftIcon={!!leftIcon}
            $hasRightSlot={!!rightSlot}
            {...inputProps}
          />
          {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
        </S.InputWrapper>
      </S.InputGroup>
    </S.FieldWrapper>
  );
};
