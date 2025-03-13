import { useSelector } from "react-redux";
import { rootState } from "../../store";

export default function Costumer() {
  const costumerName = useSelector(
    (store: rootState) => store.costumer.fullName
  );
  return (
    <div>
      <h1>Welcome "{costumerName}"</h1>
    </div>
  );
}
