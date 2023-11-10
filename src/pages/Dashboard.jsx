import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import Addproduct from './Admin/Addproduct';
import Setting from './Admin/Setting';
import DashoardHeader from '../components/DashoardHeader';
import DashboardFooter from '../components/DashboardFooter';
import DashboardSidebar from '../components/DashboardSidebar';
import Home from './Admin/Home';
import Product from './Admin/Product';

const Dashboard = () => {
  const navigate =useNavigate();


  const handlelogout =()=> {
    navigate("/login");
    //  toast("Sucessfully logout");



}



  return (
    <div> 
            
      
       <DashoardHeader />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/setting' element={<Setting />} />

      </Routes>
      <DashboardSidebar />
      <DashboardFooter /> 




      

        <ToastContainer/>
    </div>
  )
}

export default Dashboard