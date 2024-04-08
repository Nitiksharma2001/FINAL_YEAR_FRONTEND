import React, { useState, useEffect } from 'react';
import axios from "axios";

function ShowAllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/users");
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
        // If API fails, try fetching data from the text file
        fetchFallbackData();
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const fetchFallbackData = () => {
    console.log("Here");
    // Assuming 'users.txt' is in the public folder
    fetch('/users.txt')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        setError('Failed to fetch data from the text file');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
      role == JSON.stringify("admin")?
      <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            :
            <>Route Unavailable</>
      );
}

export default ShowAllUsers;
