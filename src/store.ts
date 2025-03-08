import {createStore} from "redux"

const AccountInitialState = {
  balance: 110,
  loan: 50,
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
      break;
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
      default: return state;
  }
}

const store=createStore(accountReducer)

store.dispatch({type:"account/deposit",payload:100})

console.log(store)