"use client";

import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import { persistStore } from "redux-persist";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  persistStore(storeRef.current);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
