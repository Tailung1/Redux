import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface ICostumerState {
  fullName: string;
  nationalID: string;
  createdAT: string;
}

const initialState: ICostumerState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

interface createCostumerPayLoad {
  fullName: string;
  nationalID: string;
}

const custumerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return { payload: { fullName, nationalID } };
      },
      reducer(state, action: PayloadAction<createCostumerPayLoad>) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAT = new Date().toISOString();
      },
    },
    updateName(state, action:PayloadAction<string>) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName }=custumerSlice.actions
export default custumerSlice.reducer

// interface createCostumerAction
//   extends Action<"costumer/createCostumer"> {
//   payload: {
//     fullName: string;
//     nationalID: string;
//     createdAT: string;
//   };
// }

// interface updateCostumerNameAction
//   extends Action<"costumer/updateName"> {
//   payload: string;
// }

// type costumerActionsTypes =
//   | createCostumerAction
//   | updateCostumerNameAction;

// export default function costumerReducer(
//   state: ICostumerState = CostumerInitialState,
//   action: costumerActionsTypes
// ) {
//   switch (action.type) {
//     case "costumer/createCostumer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAT: action.payload.createdAT,
//       };
//     case "costumer/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export function createCostumer(
//   fullName: string,
//   nationalID: string
// ): createCostumerAction {
//   return {
//     type: "costumer/createCostumer", //
//     payload: {
//       fullName,
//       nationalID,
//       createdAT: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName: string) {
//   return {
//     type: "costumer/updateName",
//     payload: { fullName },
//   };
// }
