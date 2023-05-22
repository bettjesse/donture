import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import {Link } from "react-router-dom"

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const handleProductsDropdownToggle = () => {
    setProductsDropdown(!productsDropdown);
  };

  return (
    <header className="bg-gray-200 text-white">
      <div className="container mx-auto pt-4 flex flex-wrap items-center relative">
        <div className="w-full md:w-auto md:flex-initial mr-20">
          <Link to = "/">
          <img src="/images/logo.png" alt="logo" className="h-16" />
          </Link>
        </div>
        <div className="w-full md:w-auto md:flex  md:ml-7">
          <nav className="md:flex md:items-center hidden font-bold ">
            <div className="relative">
              <Link to = "/"
                
                className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
               
              >
                Home
              </Link>
             
            </div>
            <Link to = "/products"
             
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
                  Products
            </Link>
            <Link to = "/services"
             
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
              Services
            </Link>
            <Link to= "/about"
              
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
              About us
            </Link>
          </nav>
        </div>
        <div className="md:ml-auto hidden md:block ">
          <div className="bg-blue-600 px-4 py-2 rounded-lg md:block">
            <a href="tel:+254758515496" className="text-white font-bold">0758515496</a>
          </div>
        </div>
        <div className="absolute top-7 right-0">
          <button
            className="h-6 md:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <FaTimes className="text-blue-600" />
            ) : (
              <FaBars className="text-blue-600" />
            )}
          </button>
        </div>
        {toggle && (
          <div className="w-full md:hidden">
            <nav className="flex flex-col items-center pt-4">
              <div className="relative">
                <Link to = "/"
              
                  className="block text-black hover:text-white mb-2"
                
                >
                  Home
                </Link>
             
              </div>
              <Link to="/products" className="block text-black hover:text-white mb-2">
                Products
              </Link>
              <Link to="/services" className="block text-black hover:text-white mb-2">
                Services
              </Link>
              <a href="/about" className="block text-black hover:text-white mb-2">
                About us
              </a>
              <div className="bg-blue-600 px-4 py-2 rounded-lg mb-2">
                <a href="tel:+254758515496" className="text-white font-bold">+254 758515496</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;