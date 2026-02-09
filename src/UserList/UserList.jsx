import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "../UserList/UserList.css"

const UserList = () => {
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(()=>{
     setLoading(true)
     const fetchUsers = async () =>{
      try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) {
          throw new Error("User not found");
        }
      const data = await response.json();
      setUsers(data)
      setLoading(true)
      }
      catch(error){
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
     }
     fetchUsers()
  },[])
   if(loading)
    return <h3>Loading Please Wait</h3>
   if(error)
     return <h3>{error}</h3>
  return (
    <>
    <div>
    <h1>User List</h1>
    <ul>
    {users.map((user) => (
       <li key={user.id}>
      <Link to={`/users/${user.id}`}>
      {user.name}
    </Link>
  </li>
))}

    </ul>
    </div>
    </>
  )
}

export default UserList

