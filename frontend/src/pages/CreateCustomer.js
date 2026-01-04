import { useState } from "react";

export default function CreateCustomer() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Customer Created");
  };

  return (
    <div>
      <h2>Create Customer</h2>
      <input placeholder="First Name" onChange={e=>setForm({...form,firstName:e.target.value})}/>
      <input placeholder="Last Name" onChange={e=>setForm({...form,lastName:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="City" onChange={e=>setForm({...form,city:e.target.value})}/>
      <input placeholder="State" onChange={e=>setForm({...form,state:e.target.value})}/>
      <input placeholder="Pin Code" onChange={e=>setForm({...form,pinCode:e.target.value})}/>
      <button onClick={submit}>Save</button>
    </div>
  );
}
