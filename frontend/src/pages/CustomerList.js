import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <Link to="/create">Add Customer</Link>
      {data.map(c => (
        <div key={c.id}>
          <Link to={`/customer/${c.id}`}>
            {c.firstName} {c.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
}
