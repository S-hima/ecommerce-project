import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          
       
          
        </Routes>
        <Sidebar />
        <Footer />
    </div>
  );
};

export default App;
