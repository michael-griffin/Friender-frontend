import { createContext } from "react";

const defaultContext = {
  user: null,
  token: null
}

const userContext = createContext(defaultContext);

export default userContext;