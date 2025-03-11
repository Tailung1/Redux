import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

interface IAccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}
export interface DepositAction extends Action<"account/deposit"> {
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
interface convertCurrency
  extends Action<"account/convertingCurrency"> {}

type AccountActions =
  | DepositAction
  | WithdrawAction
  | RequestLoan
  | PayLoan
  | convertCurrency;

const AccountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
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

    case "account/convertingCurrency":
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

export function deposit(
  amount: number,
  currency: string
): ThunkAction<void, unknown, any, DepositAction> {
  if (currency === "USD") {
    return (dispatch: any) => {
      dispatch({ type: "account/deposit", payload: amount });
    };
  }

  return async function (dispatch: any) {
    // Dispatch an action indicating that conversion is happening
    dispatch({ type: "account/convertCurrency" });

    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
      );
      const data = await response.json();
      console.log(data);

      const convertedAmount = (amount * data.rates["USD"]).toFixed(2);
      dispatch({
        type: "account/deposit",
        payload: parseFloat(convertedAmount),
      });
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      // Optionally dispatch an error action if needed
    }
  };
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
