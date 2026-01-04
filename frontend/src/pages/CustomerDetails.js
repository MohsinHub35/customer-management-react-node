// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function CustomerDetails() {
//   const { id } = useParams();
//   const [customer, setCustomer] = useState({});
//   const [addresses, setAddresses] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/customers/${id}`)
//       .then((res) => res.json())
//       .then(setCustomer);

//     fetch(`http://localhost:5000/addresses/${id}`)
//       .then((res) => res.json())
//       .then(setAddresses);
//   }, [id]);

//   return (
//     <div style={{ padding: "0 20px" }}>
//       <h2>
//         {customer.firstName} {customer.lastName}
//       </h2>
//       <p>Phone: {customer.phone}</p>
//       <p>City: {customer.city}</p>
//       <p>State: {customer.state}</p>
//       <p>Pin: {customer.pinCode}</p>

//       <h3>Addresses ({addresses.length})</h3>
//       {addresses.length === 0 && <p>No addresses yet</p>}
//       {addresses.map((a) => (
//         <div
//           key={a.id}
//           style={{ border: "1px solid #ccc", padding: "5px", margin: "5px 0" }}
//         >
//           <p>{a.addressLine}</p>
//           <p>
//             {a.city}, {a.state} - {a.pinCode}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/customers/${id}`).then(res => res.json()).then(setCustomer);
    fetch(`http://localhost:5000/addresses/${id}`).then(res => res.json()).then(setAddresses);
  }, [id]);

  return (
    <div>
      <div className="card shadow-sm p-3 mb-3">
        <h2>{customer.firstName} {customer.lastName}</h2>
        <p>Phone: {customer.phone}</p>
        <p>City: {customer.city}</p>
        <p>State: {customer.state}</p>
        <p>Pin: {customer.pinCode}</p>
      </div>

      <h3>Addresses ({addresses.length})</h3>
      <div className="row">
        {addresses.length === 0 && <p>No addresses yet</p>}
        {addresses.map(a => (
          <div className="col-md-4 mb-2" key={a.id}>
            <div className="card p-2 shadow-sm">
              <p>{a.addressLine}</p>
              <p>{a.city}, {a.state} - {a.pinCode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
