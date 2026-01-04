import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/customers/${id}`)
      .then(res => res.json())
      .then(setCustomer);

    fetch(`http://localhost:5000/addresses/${id}`)
      .then(res => res.json())
      .then(setAddresses);
  }, [id]);

  return (
    <div>
      <h2>{customer.firstName}</h2>
      <p>Phone: {customer.phone}</p>

      <h3>Addresses ({addresses.length})</h3>
      {addresses.map(a => (
        <p key={a.id}>{a.addressLine}</p>
      ))}
    </div>
  );
}
