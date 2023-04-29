/* Footer.js */
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 pt-4" style={{}}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto md:mx-0" />
            
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="list-disc pl-4">
              <p className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Home</a></p>
              <p className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800 text-lg">About Us</a></p>
              <p className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800 text-lg">Services</a></p>
              
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2">123 Main St.</p>
            <p className="text-gray-600 mb-2">Anytown, USA 12345</p>
            <p className="text-gray-600 mb-2">(123) 456-7890</p>
            <p className="text-gray-600">info@donturesystems.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="text-blue-600 hover:text-blue-800 mr-4"><FaFacebook size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600 mr-4"><FaTwitter size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-center py-2">
        <p className="text-gray-100">© 2023 DONTURE SYSTEMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
