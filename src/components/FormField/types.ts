import type { InputHTMLAttributes } from "react";

export interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}
