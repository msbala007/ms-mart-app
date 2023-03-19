"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../Store/index";
import Header from "./My-mart/Header";

import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { useEffect } from "react";

export default function Providers({ children }) {

  let persistor = persistStore(store);
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
