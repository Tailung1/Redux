import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { UseDispatch } from "react-redux";
import { createCostumer } from "./costumerSlice";

export default function CreateCostumer() {
  const [fullName, setFullName] = useState<string>("");
  const [nationalID, setNationalId] = useState<string>("");

  const costumer = useSelector((store: RootState) => store.costumer);
  const dispatch = useDispatch();

  const handleCreateCostumer = () => {
    if (!fullName || !nationalID) return;

    dispatch(createCostumer(fullName, nationalID));
  };
  console.log(costumer);

  return (
    <div>
      <h2>Create Costumer</h2>
      <div>
        <div>
          <label htmlFor='name'>Costumer full name</label>
          <input
            type='text'
            id='name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='nationalId'>Costumer nationalId</label>
          <input
            type='text'
            id='nationalId'
            value={nationalID}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleCreateCostumer}>
          Create new User
        </button>
      </div>
    </div>
  );
}
