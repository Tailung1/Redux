import { createStore, Action } from "redux";

interface IAccount {
  balance: number;
  loan: number;
  loanPurpose: string;
}
interface DepositAction extends Action<"account/deposit"> {
  payload: number;
}
interface WithdrawAction extends Action<"account/withdraw"> {
  payload: number;
}
interface RequestLoan extends Action<"account/requestLoan"> {
  payload: {
    amount: number;
    loanPurpose: string;
  };
}

const AccountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type AccountActions = DepositAction | WithdrawAction | RequestLoan;

function accountReducer(
  state: IAccount = AccountInitialState,
  action: AccountActions
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(accountReducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

store.dispatch(deposit(100000));
console.log(store.getState());

store.dispatch(requestLoan(5000, "buy a car"));

console.log(store.getState());
