import { combineReducers, legacy_createStore } from "redux";
import loginReducer from "./reducers/login.reducers";
import userReducer from "./reducers/users.reducers";

const rootReducer = combineReducers({ loginReducer, userReducer });
export const store = legacy_createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
