import { User } from "../Interfaces/Entity/User.";

export interface IResultGetUserFromLocalStorage {
  isNullUserLocalStorage: boolean;
  user: User | null;
}
