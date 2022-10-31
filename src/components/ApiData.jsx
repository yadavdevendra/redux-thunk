import React from "react";

const ApiData = ({ users }) => {
  return (
    <div>
      <h1>User Data Show In Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Namen</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        {users?.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street}
                {user.address.suite}
                {user.address.city}
                {user.address.zipcode}
                {user.address.geo.lat}
                {user.address.geo.lng}
              </td>
              <td>{user.phone.slice(0, 13).split(/[-().]/)}</td>
              <td>{user.website}</td>
              <td>
                {user.company.name}
                {user.company.catchPhrase}
                {user.company.bs}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ApiData;
