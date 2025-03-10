import { Action } from "redux";

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

type AccountActions =
  | DepositAction
  | WithdrawAction
  | RequestLoan
  | PayLoan;

const AccountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(
  state: IAccountState = AccountInitialState,
  action: AccountActions
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      if (state.balance < action.payload) return state;
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
      if (state.balance < state.loan) return state;
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

export function deposit(amount: number): DepositAction {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount: number): WithdrawAction {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(
  amount: number,
  purpose: string
): RequestLoan {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan(): PayLoan {
  return {
    type: "account/payLoan",
  };
}
