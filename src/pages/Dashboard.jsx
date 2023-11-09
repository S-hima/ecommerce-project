import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate =useNavigate();


  const handlelogout =()=> {
    navigate("/login");
    //  toast("Sucessfully logout");



}



  return (
    <div>WELCOME TO SEEMA'S WORLD

      <button onClick={handlelogout} className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white
         focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  ">logout</button>


      

        <ToastContainer/>
    </div>
  )
}

export default Dashboard