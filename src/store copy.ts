import { createStore, combineReducers } from "redux";
import costumerReducer,{createCostumer} from "./features/costumers/costumerSlice";
import accountReducer from "./features/accounts/accountSlice";
import { deposit } from "./features/accounts/accountSlice";


const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

 const store = createStore(rootReducer);


store.dispatch(deposit(1000000))

console.log(store.getState())

store.dispatch(createCostumer("chicha","1212"))

console.log(store.getState())

export default store;



