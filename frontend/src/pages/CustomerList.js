// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function CustomerList() {
//   const [customers, setCustomers] = useState([]);
//   const [city, setCity] = useState("");
//   const [stateFilter, setStateFilter] = useState("");
//   const [pin, setPin] = useState("");

//   const fetchCustomers = async (filters = {}) => {
//     let query = "";
//     if (filters.city) query += `city=${filters.city}&`;
//     if (filters.state) query += `state=${filters.state}&`;
//     if (filters.pinCode) query += `pinCode=${filters.pinCode}&`;

//     const res = await fetch(
//       `http://localhost:5000/customers?${query}`
//     );
//     const data = await res.json();
//     setCustomers(data);
//   };

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const handleSearch = () => {
//     fetchCustomers({ city, state: stateFilter, pinCode: pin });
//   };

//   const handleClear = () => {
//     setCity(""); setStateFilter(""); setPin("");
//     fetchCustomers();
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this customer?")) {
//       await fetch(`http://localhost:5000/customers/${id}`, {
//         method: "DELETE",
//       });
//       fetchCustomers();
//     }
//   };

//   return (
//     <div style={{ padding: "0 20px" }}>
//       <div style={{ marginBottom: "20px" }}>
//         <Link to="/create">Add Customer</Link>
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <input
//           placeholder="City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <input
//           placeholder="State"
//           value={stateFilter}
//           onChange={(e) => setStateFilter(e.target.value)}
//         />
//         <input
//           placeholder="Pin Code"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>

//       {customers.length === 0 ? (
//         <p>No customers found</p>
//       ) : (
//         customers.map((c) => (
//           <div
//             key={c.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <Link to={`/customer/${c.id}`}>
//               {c.firstName} {c.lastName}
//             </Link>
//             <button
//               onClick={() => handleDelete(c.id)}
//               style={{ marginLeft: "10px" }}
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then(res => res.json())
      .then(setCustomers);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      await fetch(`http://localhost:5000/customers/${id}`, { method: "DELETE" });
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Customer List</h2>
        <Link className="btn btn-success" to="/create">+ Add Customer</Link>
      </div>

      <div className="row">
        {customers.length === 0 && <p>No customers yet</p>}
        {customers.map(c => (
          <div className="col-md-4 mb-3" key={c.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{c.firstName} {c.lastName}</h5>
                <p className="card-text">
                  Phone: {c.phone}<br />
                  City: {c.city}<br />
                  State: {c.state}<br />
                  Pin: {c.pinCode}
                </p>
                <Link className="btn btn-primary btn-sm me-2" to={`/customer/${c.id}`}>Details</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
