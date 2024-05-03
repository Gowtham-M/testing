import React from 'react';

const Table = () => {
  // Hardcoded data
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
    { id: 4, name: 'Alice Williams', age: 40, city: 'San Francisco' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;