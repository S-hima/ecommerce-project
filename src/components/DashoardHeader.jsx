import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const DashboardHeader = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate =useNavigate();
  const handlelogout =()=>{
    navigate("/login");
  }

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
        className="h-20 bg-purple-300"
      
    >
        <nav className=' w-full flex  text-black p-4 fixes top-0'>
      
      <div className="container  mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="" />
          </div>
        </Link>
        

        {/* cart */}
        <div className="flex flex-row gap-4">

         <div>
          <button onClick={handlelogout} className="py-5 bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5">
            logout</button>
          </div> 
        
        
        </div>
        </div>
        </nav>
    </header>
  );
};

export default DashboardHeader;

