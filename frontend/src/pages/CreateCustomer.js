// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CreateCustomer() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     city: "",
//     state: "",
//     pinCode: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async () => {
//     if (!form.firstName || !form.lastName || !form.phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     await fetch("http://localhost:5000/customers", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     alert("Customer Created");
//     navigate("/");
//   };

//   return (
//     <div style={{ padding: "0 20px" }}>
//       <h2>Create Customer</h2>
//       <input
//         name="firstName"
//         placeholder="First Name *"
//         value={form.firstName}
//         onChange={handleChange}
//       />
//       <input
//         name="lastName"
//         placeholder="Last Name *"
//         value={form.lastName}
//         onChange={handleChange}
//       />
//       <input
//         name="phone"
//         placeholder="Phone *"
//         value={form.phone}
//         onChange={handleChange}
//       />
//       <input
//         name="city"
//         placeholder="City"
//         value={form.city}
//         onChange={handleChange}
//       />
//       <input
//         name="state"
//         placeholder="State"
//         value={form.state}
//         onChange={handleChange}
//       />
//       <input
//         name="pinCode"
//         placeholder="Pin Code"
//         value={form.pinCode}
//         onChange={handleChange}
//       />
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCustomer() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", city: "", state: "", pinCode: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone) return alert("Please fill required fields");

    await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Customer Created");
    navigate("/");
  };

  return (
    <div className="card shadow-sm p-4">
      <h2 className="mb-3">Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {["firstName","lastName","phone","city","state","pinCode"].map((field) => (
            <div className="col-md-6 mb-3" key={field}>
              <input
                type="text"
                className="form-control"
                placeholder={field.replace(/([A-Z])/g, ' $1')}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required={["firstName","lastName","phone"].includes(field)}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-success">Save Customer</button>
      </form>
    </div>
  );
}
