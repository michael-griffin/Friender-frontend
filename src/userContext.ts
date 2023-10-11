import { createContext } from "react";
import { UserInterface } from "./interfaces";

const defaultContext: {
  user: UserInterface | null,
  token: string | null
} = {
  user: null,
  token: null
}

const userContext = createContext(defaultContext);

export default userContext;