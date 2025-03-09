import React, { useState } from "react";

export default function CreateCostumer() {
  const [fullName, setFullName] = useState<string>("");
  const [nationalID, setNationalId] = useState<string | number>("");

  const handleCreateCostumer=()=> 


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
        <button onClick={}>Create new User</button>
      </div>
    </div>
  );
}
