import { useSelector } from "react-redux";
import { rootState } from "../../store";

function formatCurrnecy(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function BalanceDisplay() {
  const balance = useSelector(
    (state: rootState) => state.account.balance
  );
  return (
    <div>
      <h1>{formatCurrnecy(balance)}</h1>
    </div>
  );
}
