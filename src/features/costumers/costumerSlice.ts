import { Action } from "redux";

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
  payload: string;
}

type costumerActionsTypes =
  | createCostumerAction
  | updateCostumerNameAction;

export default function costumerReducer(
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

export function createCostumer(
  fullName: string,
  nationalID: string
): createCostumerAction {
  return {
    type: "costumer/createCostumer", //
    payload: {
      fullName,
      nationalID,
      createdAT: new Date().toISOString(),
    },
  };
}

export function updateName(fullName: string) {
  return {
    type: "costumer/updateName",
    payload: { fullName },
  };
}
