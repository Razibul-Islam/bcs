import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="overflow-y-auto">
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="px-6 py-4">
              Serial
            </th>
            <th scope="col" class="px-6 py-4">
              Name
            </th>
            <th scope="col" class="px-6 py-4">
              Email
            </th>
            <th scope="col" class="px-6 py-4">
              Role
            </th>
            <th scope="col" class="px-6 py-4">
              Address
            </th>
            <th scope="col" class="px-6 py-4">
              Mobile
            </th>
            <th scope="col" class="px-6 py-4">
              Package
            </th>
            <th scope="col" class="px-6 py-4">
              PackageEndDate
            </th>
            <th scope="col" class="px-6 py-4">
              PackageStartDate
            </th>
            <th scope="col" class="px-6 py-4">
              PackageType
            </th>
            <th scope="col" class="px-6 py-4">
              UserStatus
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{i++}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.UserName}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.Role}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.Address}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.Mobile}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.Package}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.PackageEndDate}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.PackageEndDate}</td>
              <td class="whitespace-nowrap px-6 py-4">
                {user.PackageStartDate}
              </td>
              <td class="whitespace-nowrap px-6 py-4">{user.PackageType}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.UserStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
