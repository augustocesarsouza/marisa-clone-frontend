export interface Product {
  id: string;
  title: string;
  code: number;
  price: number;
  priceDiscounted: number;
  discountPercentage: number;
  installmentPrice: number;
  installmentTimesMarisaCard: number;
  installmentTimesCreditCard: number;
  colors: string[];
  sizesAvailable: string[];
  imageUrl: string;
  quantityAvailable: number;
  createdAt: string;
  updatedAt: string;
  type: string;
}
