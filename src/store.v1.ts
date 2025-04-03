import { PayloadAction } from "@reduxjs/toolkit";
import { Action, createStore } from "redux";


const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

interface depositAction extends Action {
  type: "account/deposit";
  payload: number;
}
interface withdrawAction extends Action {
  type: "account/withdraw";
  payload: number;
}
interface requestLoanAction extends Action {
  type: "account/requestLoan";
  payload: {
    amount: number;
    purpose: string;
  };
}
interface payLoanAction extends Action {
  type: "account/payLoan";
}

type actionTypes =
  | depositAction
  | withdrawAction
  | requestLoanAction
  | payLoanAction;

export default function accountReducer(
  state = initialState,
  action: actionTypes
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
      };
  }
}
const store = createStore(accountReducer);

function deposit(amount: number):depositAction {
  return { type: "account/deposit", payload:amount };
}
function withdraw(amount: number):withdrawAction {
  return { type: "account/withdraw",payload: amount };
}
function requestLoan(amount: number, purpose: string):requestLoanAction {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan(){
  return { type: "account/payLoan"};
}

console.log(store.getState());