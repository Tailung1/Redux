import { Action } from "redux";

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
interface RequestLoanAction extends Action {
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
  | RequestLoanAction
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
