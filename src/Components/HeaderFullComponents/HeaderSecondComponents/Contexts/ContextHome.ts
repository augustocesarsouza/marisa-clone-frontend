import { createContext } from "react";
import { User } from "../../../Interfaces/Entity/User.";

export interface ContextHomeProps {
  user: User | null;
  // setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
}


export const ContextHome = createContext<ContextHomeProps | null>(null);