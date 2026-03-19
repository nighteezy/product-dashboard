export interface AddProductFormData {
  title: string;
  price: string;
  vendor: string;
  sku: string;
}

export interface AddProductFormProps {
  onSubmit: (data: AddProductFormData) => void;
}
