import { User } from './User.';

export interface Address {
  id: string | null;
  addressNickname: string | null;
  addressType: string | null;
  recipientName: string | null; // isso pode ser do tipo "DATE"
  zipCode: string | null;
  street: string | null;
  number: number | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  referencePoint: string | null;
  mainAddress: boolean | null;
  userId: string | null;
  userDTO: User | null;
}
