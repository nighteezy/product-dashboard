import { type FC, useState } from "react";

import { FormField } from "components";

import type {
  AddProductFormData,
  AddProductFormProps,
} from "./types";
import * as S from "./units";

const INITIAL_DATA: AddProductFormData = {
  title: "",
  price: "",
  vendor: "",
  sku: "",
};

export const AddProductForm: FC<AddProductFormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<AddProductFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<
    Partial<Record<keyof AddProductFormData, string>>
  >({});

  const updateField = (field: keyof AddProductFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AddProductFormData, string>> = {};

    if (!data.title.trim()) {
      newErrors.title = "Введите наименование";
    }

    const priceNum = parseFloat(data.price.replace(",", "."));
    if (!data.price.trim()) {
      newErrors.price = "Введите цену";
    } else if (isNaN(priceNum) || priceNum < 0) {
      newErrors.price = "Некорректная цена";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(data);
    setData(INITIAL_DATA);
    setErrors({});
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
      error={errors[field]}
      inputProps={{
        value: data[field],
        onChange: (e) => updateField(field, e.target.value),
        placeholder,
        "aria-invalid": !!errors[field],
        ...inputProps,
      }}
    />
  );

  return (
    <S.Form onSubmit={handleSubmit}>
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
