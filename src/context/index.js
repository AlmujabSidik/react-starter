import { createContext, useState } from "react";

export const GlobalContext = createContext({
  count: 0,
  setCount: () => {},
});
