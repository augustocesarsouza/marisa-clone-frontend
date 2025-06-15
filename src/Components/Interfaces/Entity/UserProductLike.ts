import { Product } from './Product';
import { User } from './User.';

export interface UserProductLike {
  id: string | null;
  productId: string | null;
  productIdString: string;
  product: Product | null;
  userId: string | null;
  userIdString: string;
  user: User | null;
  likedAt: Date | null;
}
