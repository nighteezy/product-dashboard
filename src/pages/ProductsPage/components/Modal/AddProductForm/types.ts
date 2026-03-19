export interface AddProductFormData {
  title: string;
  price: string;
  vendor: string;
  sku: string;
}

export interface IAddProductForm {
  onSubmit: (data: AddProductFormData) => void;
}
