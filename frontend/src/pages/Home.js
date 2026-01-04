import CreateCustomer from "./CreateCustomer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-hero text-center text-white">
        <h1 className="hero-title">Welcome to EnergyTech.ai</h1>
        <p className="hero-subtitle">
          EnergyTech.ai is a cutting-edge energy management company, providing smart solutions to track and manage energy consumption efficiently.
        </p>
        <p className="hero-subtitle">
          This platform allows managing customers and their addresses efficiently.
        </p>
              <h1 class="x">This is my assignment!</h1>

      </div>
      

      {/* Add Customer Form Section */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">Add New Customer</h2>
        <CreateCustomer />
      </div>
    </div>
  );
}
