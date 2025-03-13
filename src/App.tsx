import "./App.css";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCostumer from "./features/costumers/CreateCostumer";
import Costumer from "./features/costumers/Costumer";

import { rootState } from "./store.v2";
import { useSelector } from "react-redux";

function App() {
  const costumer = useSelector((store: rootState) => store.costumer);

  return (
    <>
      {costumer.fullName ? (
        <div>
          {" "}
          <Costumer /> <BalanceDisplay /> <AccountOperations />{" "}
        </div>
      ) : (
        <CreateCostumer />
      )}
    </>
  );
}

export default App;
