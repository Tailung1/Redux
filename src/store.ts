import { configureStore } from "@reduxjs/toolkit";
import costumerReducer from "./features/costumers/costumerSlice";
import accountReducer from "./features/accounts/accountSlice";





export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        account:accountReducer,
        costumer: costumerReducer
    }
})

export default store;
