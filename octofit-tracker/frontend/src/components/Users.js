import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';

  useEffect(() => {
    console.log('Fetching from:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched users:', data);
        setUsers(data.results ? data.results : data);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [baseUrl]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
