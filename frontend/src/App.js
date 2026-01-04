import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import CreateCustomer from "./pages/CreateCustomer";
import CustomerDetails from "./pages/CustomerDetails";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/">EnergyTech.ai</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Add Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/customers">Customer List</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/create" element={<CreateCustomer />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
