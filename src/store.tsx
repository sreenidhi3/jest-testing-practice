import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userReducer} from "./reducers/users.reducer";
import {userSaga} from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({userReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(userSaga)