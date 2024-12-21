/* eslint-disable @typescript-eslint/no-empty-object-type */
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { enhanceReduxMiddleware } from "@kepler.gl/reducers";
import keplerGlReducer from "@kepler.gl/reducers";
import appReducer from "./reducers/appReducer";
import { AnyAction, Dispatch } from "redux";

// Define RootState
const rootReducer = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = Dispatch<AnyAction>;

// Enhance Kepler middleware and cast for compatibility
const keplerMiddlewares = enhanceReduxMiddleware([]) as Middleware<
  {}, // Dependencies (not used here)
  RootState, // RootState type
  Dispatch<AnyAction> // Dispatch type
>[];

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable for Kepler.gl compatibility
    }).concat(keplerMiddlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = typeof store;
export default store;
