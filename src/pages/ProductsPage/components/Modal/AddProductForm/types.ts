import { z } from "zod";

export const addProductSchema = z.object({
  title: z.string().min(1, "Введите наименование"),
  price: z
    .string()
    .min(1, "Введите цену")
    .refine(
      (val) => {
        const num = parseFloat(val.replace(",", "."));
        return !Number.isNaN(num) && num >= 0;
      },
      { message: "Некорректная цена" },
    ),
  vendor: z.string().min(1, "Введите вендора"),
  sku: z.string().min(1, "Введите артикул"),
});

export type AddProductFormData = z.infer<typeof addProductSchema>;

export interface IAddProductForm {
  onSubmit: (data: AddProductFormData) => void;
}
