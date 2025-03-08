import { createStore } from "redux";

const AccountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function accountReducer(state = AccountInitialState, action) {
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
        purpose: action.payload.purpose,
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

store.dispatch({ type: "account/deposit", payload: 100000 });

console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 25000,
    purpose: "buy a car",
  },
});

console.log(store.getState());
