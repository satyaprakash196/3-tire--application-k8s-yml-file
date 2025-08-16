import React, { useState, useEffect } from "react";
import axios from "axios";

const PRODUCTS_API = "/api/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    axios.get(PRODUCTS_API).then((res) => setProducts(res.data));
  }, []);

  const addProduct = () => {
    axios.post(PRODUCTS_API, form).then((res) => {
      setProducts([...products, res.data]);
      setForm({ name: "", price: "" });
    });
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Products;

