import { type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormField } from "components";

import type { IAddProductForm } from "./types";
import { addProductSchema, type AddProductFormData } from "./types";
import * as S from "./units";

export const AddProductForm: FC<IAddProductForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: "",
      price: "",
      vendor: "",
      sku: "",
    },
  });

  const onFormSubmit = (data: AddProductFormData) => {
    onSubmit(data);
    reset();
  };

  const renderField = (
    field: keyof AddProductFormData,
    label: string,
    placeholder: string,
    inputProps: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <FormField
      label={label}
      id={`add-product-${field}`}
      error={errors[field]?.message}
      inputProps={{
        placeholder,
        "aria-invalid": !!errors[field],
        ...register(field),
        ...inputProps,
      }}
    />
  );

  return (
    <S.Form onSubmit={handleSubmit(onFormSubmit)}>
      {renderField("title", "Наименование", "Введите наименование товара")}
      {renderField("price", "Цена, ₽", "0,00", {
        type: "text",
        inputMode: "decimal",
      })}
      {renderField("vendor", "Вендор", "Введите вендора")}
      {renderField("sku", "Артикул", "Введите артикул")}

      <S.SubmitButton type="submit">Добавить товар</S.SubmitButton>
    </S.Form>
  );
};
