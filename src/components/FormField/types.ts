import type { InputHTMLAttributes } from "react";

export interface IFormField {
  label: string;
  id: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}
