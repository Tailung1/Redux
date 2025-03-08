import { createStore, Action } from "redux";

interface IAccountState {
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
    purpose: string;
  };
}
interface PayLoan extends Action<"account/payLoan"> {}

const AccountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type AccountActions =
  | DepositAction
  | WithdrawAction
  | RequestLoan
  | PayLoan;

function accountReducer(
  state: IAccountState = AccountInitialState,
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

function deposit(amount: number): DepositAction {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount: number): WithdrawAction {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount: number, purpose: string): RequestLoan {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan(): PayLoan {
  return {
    type: "account/payLoan",
  };
}

store.dispatch(deposit(100000));
console.log(store.getState());

store.dispatch(requestLoan(5000, "buy a car"));

store.dispatch(withdraw(20000))

console.log(store.getState());
store.dispatch(payLoan());

console.log(store.getState());
