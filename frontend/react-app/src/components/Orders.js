import React, { useState } from "react";
import axios from "axios";

const ORDERS_API = "/api/orders";

function Orders() {
  const [form, setForm] = useState({ user_id: "", product_id: "" });
  const [message, setMessage] = useState("");

  const placeOrder = () => {
    axios.post(ORDERS_API, form).then((res) => {
      setMessage("Order placed successfully!");
      setForm({ user_id: "", product_id: "" });
    });
  };

  return (
    <div>
      <h2>Place Order</h2>
      <input
        placeholder="User ID"
        type="number"
        value={form.user_id}
        onChange={(e) => setForm({ ...form, user_id: e.target.value })}
      />
      <input
        placeholder="Product ID"
        type="number"
        value={form.product_id}
        onChange={(e) => setForm({ ...form, product_id: e.target.value })}
      />
      <button onClick={placeOrder}>Place Order</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Orders;

