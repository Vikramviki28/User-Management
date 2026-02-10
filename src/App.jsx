import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import UserList from './UserList/UserList';
import UserDetails from './UserDetails/UserDetails';
import UserForm from './AddUser/UserForm';



const App = () => {
  // const Navigate = useNavigate()
  const [users,setUsers] = useState([])
  useEffect(()=>{
     const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
    const fetchUsers= async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
       localStorage.setItem("users", JSON.stringify(data));
    }
    fetchUsers()
 }},[])
    useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

   const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
   <>
   <BrowserRouter>
   <Routes>
    {/* <Route path="/" element={<Link to="/users" replace />} /> */}
  <Route path="/" element={<UserList users={users} />} />
  <Route path="/users/:id" element={<UserDetails users={users} />} />
  <Route path="/add-user" element={<UserForm addUser={addUser} />} />
</Routes>


   </BrowserRouter>
   </>
  )
}

export default App