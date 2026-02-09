import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './UserList/UserList';
import UserDetails from './UserDetails/UserDetails';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<UserList/>} />
      <Route path="/users/:id" element={<UserDetails/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App