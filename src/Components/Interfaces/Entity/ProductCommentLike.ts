import { Product } from './Product';
import { ProductComment } from './ProductComment';
import { User } from './User.';

export interface ProductCommentLike {
  id: string;
  productId: string;
  productDTO: Product | null;
  userId: string;
  UserDTO: User | null;
  productCommentId: string;
  ProductCommentDTO: ProductComment | null;
  reaction: Reaction;
  createdAt: string;
}

export enum Reaction {
  None = 0,
  Like = 1,
  Dislike = 2,
}
