import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "./accountSlice";
import { AppDispatch } from "../../store";

export default function AccountOperations() {
  const dispatch = useDispatch<AppDispatch>();

  const [depositAmount, setDepositAmount] = useState<string | number>(
    ""
  );
  const [withdrawAmount, setWithdrawAmount] = useState<
    string | number
  >("");
  const [loanAmount, setLoanAmount] = useState<string | number>("");
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit(+depositAmount));
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (!withdrawAmount) return;

    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  };

  const handleRequestLoan = () => {};

  const handlePayLoan = () => {};

  return (
    <div>
      <h2>Your account operations</h2>
      <div>
        <div>
          <div>
            <label>Deposit</label>
            <input
              type='number'
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
            />
          </div>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value={"USD"}>USD</option>
            <option value={"EUR"}>EUR</option>
            <option value={"GBP"}>GBP</option>
          </select>

          <button onClick={handleDeposit}>Deposit</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type='number'
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
        <div>
          <label>RequestLoan</label>
          <input type='number' />
          <input type='number' />
          <button>RequestLoan</button>
        </div>
        <button>PayLoan</button>
      </div>
    </div>
  );
}
