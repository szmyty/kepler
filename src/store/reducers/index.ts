import { combineReducers } from "redux";
import keplerReducer from "./keplerReducer";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
  keplerGl: keplerReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
