"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  basket: cartSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  // reducer: {
  //   basket: cartSlice,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
