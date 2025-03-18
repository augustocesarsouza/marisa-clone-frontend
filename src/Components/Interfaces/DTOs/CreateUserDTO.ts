import { User } from "../Entity/User.";

export interface CreateUserDTO {
  tokenIsValid: boolean;
  userDTO: User;
}