import { createContext } from "react";
import { User } from "../../Interfaces/Entity/User.";

export interface ContextMyAccountProps {
  user: User | null;
  // setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
}


export const ContextMyAccount = createContext<ContextMyAccountProps | null>(null);