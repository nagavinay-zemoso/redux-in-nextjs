"use client";

import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

export const Provider = ({ children }: any) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
