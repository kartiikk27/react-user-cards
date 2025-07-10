
import React, { useEffect, useState } from 'react';
import './UserCard.css';

const UserCard = ({ name, email, age, onDelete }) => {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    console.log(`Clicked on ${name}`);
    setClicked(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;

  return (
    <div className={`user-card ${visible ? 'fade-in' : ''}`}>
      <img src={avatarUrl} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={onDelete} style={{ marginLeft: '0.5rem' }}>Delete</button>
      {clicked && <p style={{ color: 'green' }}>You clicked on {name}!</p>}
    </div>
  );
};

export default UserCard;
