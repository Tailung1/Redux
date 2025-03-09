import { createStore, combineReducers } from "redux";
import costumerReducer from "./features/costumers/costumerSlice";
import accountReducer from "./features/accounts/accountSlice";


const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch= typeof store.dispatch

export const store = createStore(rootReducer);

export default store;
