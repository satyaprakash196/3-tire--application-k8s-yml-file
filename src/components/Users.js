import React, { useState, useEffect } from "react";
import axios from "axios";

const USERS_API = "/api/users"; // We'll configure Ingress to route this

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(USERS_API).then((res) => setUsers(res.data));
  }, []);

  const addUser = () => {
    axios.post(USERS_API, { name }).then((res) => {
      setUsers([...users, res.data]);
      setName("");
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default Users;

