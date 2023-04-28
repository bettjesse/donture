import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-gray-200 text-white">
      <div className="container mx-auto pt-4 flex flex-wrap items-center relative">
        <div className="w-full md:w-auto md:flex-initial mr-20">
          <img src="/images/logo.png" alt="logo" className="h-16" />
        </div>
        <div className="w-full md:w-auto md:flex  md:ml-7">
          <nav className="md:flex md:items-center hidden font-bold ">
            <a
              href="/products"
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
              Product
            </a>
            <a
              href="/services"
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
              Services
            </a>
            <a
              href="/why-danture"
              className="block text-black hover:text-white mr-12 mt-4 md:mt-0"
            >
              Why Danture
            </a>
          
          </nav>
        </div>
        <div className="md:ml-auto hidden md:block ">
  <div className="bg-blue-600 px-4 py-2 rounded-lg md:block">
    <a href="tel:+1234567890" className="text-white font-bold">+1 (234) 567-890</a>
  </div>
</div>



        <div className="absolute top-7 right-0">
          <button
            className="h-6 md:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
           {toggle ? <FaTimes className="text-blue-600" /> : <FaBars className="text-blue-600" />}

          </button>
        </div>

        {toggle && (
          <div className="w-full md:hidden">
            <nav className="flex flex-col items-center pt-4">
              <a
                href="/products"
                className="block text-black hover:text-white mb-2"
              >
                Products
              </a>
              <a
                href="/services"
                className="block text-black hover:text-white mb-2"
              >
                Services
              </a>
              <a
                href="/why-danture"
                className="block text-black hover:text-white mb-2"
              >
                Why Danture
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
