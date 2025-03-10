import { createStore, Action, combineReducers } from "redux";


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

interface ICostumerState {
  fullName: string;
  nationalID: string;
  createdAT: string;
}

const CostumerInitialState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

interface createCostumerAction
  extends Action<"costumer/createCostumer"> {
  payload: {
    fullName: string;
    nationalID: string;
    createdAT: string;
  };
}

interface updateCostumerNameAction
  extends Action<"costumer/updateName"> {
  payload: {
    fullName:string
  };
}

type costumerActionsTypes =
  | createCostumerAction
  | updateCostumerNameAction;

  

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



function costumerReducer(
  state: ICostumerState = CostumerInitialState,
  action: costumerActionsTypes
) {
  switch (action.type) {
    case "costumer/createCostumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: action.payload.createdAT,
      };
    case "costumer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

const store = createStore(rootReducer);

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

function createCostumer(
  fullName: string,
  nationalID: string
): createCostumerAction {
  return {
    type: "costumer/createCostumer", // No `as const` needed now
    payload: {
      fullName,
      nationalID,
      createdAT: new Date().toISOString(),
    },
  };
}

function updateName(fullName: string):updateCostumerNameAction {
  return {
    type: "costumer/updateName",
    payload:  {fullName} ,
  };
}

store.dispatch<createCostumerAction>(
  createCostumer("chicha", "31313")
);

store.dispatch(deposit(100000));
console.log(store.getState());

store.dispatch(requestLoan(5000, "buy a car"));

store.dispatch(withdraw(20000));

console.log(store.getState());
store.dispatch(payLoan());

store.dispatch(updateName("taso"));

console.log(store.getState());
