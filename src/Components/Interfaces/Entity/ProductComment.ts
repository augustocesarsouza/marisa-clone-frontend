import { Product } from './Product';

export interface ProductComment {
  id: string;
  productId: string;
  productIdString: string;
  productDTO: Product | null;
  starQuantity: number;
  recommendProduct: boolean;
  comment: string;
  name: string;
  email: string;
  imgProduct: string;
  createdAt: string;
  updatedAt: string;
}
