import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from '../pages/admin/Admin';
import AdminHome from '../pages/admin/Home/AdminHome';
import Courses from '../pages/courses/Courses';
import Forgot from '../pages/forgot/Forgot';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import StudentDashboard from '../pages/StudentDashboard';
import Enrollment from '../pages/enrollment/Enrollment';

const Router = () => {
  return (
<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/enrollment" element={<Enrollment />} />
      <Route exact path="/forgot" element={<Forgot />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/homeadmin" element={<AdminHome />} />
      <Route exact path="/usersadmin" element={<AdminHome />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path='/studentdashboard' element={<StudentDashboard/>} />
    </Routes>

  </BrowserRouter>
  )
}
export default Router;