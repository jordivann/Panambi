export interface Product {
  title: string;
  category: string;
  price: number;
  discount: boolean;
  discountPercent: number;
  id?: string;
  imageReference: string;
  details?: string;
}
