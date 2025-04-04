import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "./accountSlice";
import { AppDispatch, rootState } from "../../store.v2";

export default function AccountOperations() {
  const dispatch = useDispatch<AppDispatch>();
  let { isLoading } = useSelector(
    (store: rootState) => store.account
  );

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

    dispatch(deposit(+depositAmount, currency));
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (!withdrawAmount) return;

    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(+loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

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

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting" : "Deposit"}
          </button>
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
          <input
            type='number'
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <input
            type='text'
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button onClick={handleRequestLoan}>RequestLoan</button>
        </div>
        <button onClick={handlePayLoan}>PayLoan</button>
      </div>
    </div>
  );
}
