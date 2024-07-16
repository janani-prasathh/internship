import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetailsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/users/${id}`).then(response => {
      setUsers(users.filter(user => user._id !== id));
    });
  };

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => alert(JSON.stringify(user))}>View</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailsPage;
