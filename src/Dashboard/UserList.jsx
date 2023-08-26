import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (_id)=> {
    const url = `https://bcspioneer.vercel.app/delete-user?_id=${_id}`;
    fetch(url, {
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(data => {
      toast.success('Delete Successfull')
    })
  };



  const handleMakeAdmin = (_id)=>{
    const url = `https://bcspioneer.vercel.app/make-admin?_id=${_id}`;
    fetch(url, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  const handleMakeUser = (_id)=>{
    const url = `https://bcspioneer.vercel.app/make-user?_id=${_id}`;
    fetch(url, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  useEffect(() => {
    fetch("https://bcspioneer.vercel.app/get-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [handleDelete, handleMakeUser, handleMakeAdmin]);

  



  return (
    <div className="p-5">
      <div className="max-w-2xl mx-auto overflow-scroll">
        <table>
          <tr>
            <th>নাম</th>
            <th>ইমেইল</th>
            <th>রোল</th>
            <th>একশন</th>
          </tr>
          {
            users.map(user => {
              return (
                <tr>
                  <td>{user.UserName}</td>
                  <td>{user.email}</td>
                  <td>{user.Role}</td>
                  <td className="flex gap-2">
                    {
                      user.Role == 'Admin' ? <button onClick={()=> handleMakeUser(user._id)} className="px-3 rounded-sm shadow-2xl text-white bg-green-500">Make User</button> : <button onClick={()=> handleMakeAdmin(user._id)} className="px-3 rounded-sm shadow-2xl text-white bg-green-500">Make Admin</button>
                    }
                    
                    <button onClick={()=> handleDelete(user._id)} className="px-3 rounded-sm shadow-2xl text-white bg-red-500">Delete</button>
                  </td>
                </tr>

              )
            })
          }
        </table>
      </div>


    </div>
  );
};

export default UserList;
