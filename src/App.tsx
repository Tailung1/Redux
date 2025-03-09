import "./App.css";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCostumer from "./features/costumers/CreateCostumer";
import Costumer from "./features/costumers/Costumer";

function App() {
  return (
    <>
      <CreateCostumer />
      {/* <Costumer />
      <BalanceDisplay />
      <AccountOperations /> */}
    </>
  );
}

export default App;
