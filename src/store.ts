import { createStore, combineReducers } from "redux";
import costumerReducer, {
  createCostumer,
} from "./features/costumers/costumerSlice";
import accountReducer from "./features/accounts/accountSlice";
import { deposit } from "./features/accounts/accountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

export type RootState=ReturnType< typeof rootReducer>

export const store = createStore(rootReducer);

export default store;
