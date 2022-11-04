
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Task from "./component/Task";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route,} from "react-router-dom";

import User from "./Pages/User";
import UserNewPass from "./Pages/UserNewpassword";




function App() {
  
  return (
    <>
      {/* {
        data ? ( */}
          <>
       <Navbar/>
  
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/task" element={<Task />} />
      <Route path="/user" element={<User/>} />
      <Route path="/UserNewPass" element={<UserNewPass/>} />
      
    </Routes>
    </>
  
   
  


</>
);
}

export default App;