import { useSelector } from "react-redux";
import { rootState } from "../../store";

export default function BalanceDisplay() {
  const balance = useSelector(
    (state: rootState) => state.account.balance
  );
  return (
    <div>
      <h1>{balance}</h1>
    </div>
  );
}
