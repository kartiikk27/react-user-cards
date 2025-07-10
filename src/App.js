
import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 }
  ]);

  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const addUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.age) return;
    const newUser = { ...form, id: Date.now(), age: parseInt(form.age) };
    setUsers([newUser, ...users]);
    setForm({ name: "", email: "", age: "" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>User Cards</h1>
      <form onSubmit={addUser} style={{ marginBottom: '2rem' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Age" type="number" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
        <button type="submit">Add User</button>
      </form>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          age={user.age}
          onDelete={() => deleteUser(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
