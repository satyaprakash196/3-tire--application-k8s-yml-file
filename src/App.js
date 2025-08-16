import React from "react";
import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>K8s Microservices Dashboard</h1>
      <Users />
      <Products />
      <Orders />
    </div>
  );
}

export default App;
