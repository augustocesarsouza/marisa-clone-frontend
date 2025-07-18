import { Product } from './Product';

export interface ProductAdditionalInfo {
  id: string;
  imgsSecondary: string[];
  aboutProduct: ProductInfoSection[];
  composition: string;
  shippingInformation: string;
  productId: string;
  product: Product | null;
}

export interface ProductInfoSection {
  title: string;
  items: string[];
}
