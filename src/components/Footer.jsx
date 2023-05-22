


/* Footer.js */
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 pt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto md:mx-0" />
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="list-disc pl-4">
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-gray-800 text-lg">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-gray-600 hover:text-gray-800 text-lg">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-gray-600 hover:text-gray-800 text-lg">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-600 hover:text-gray-800 text-lg">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/policies" className="text-gray-600 hover:text-gray-800 text-lg">
                  Management policies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-600 mb-2">
              Head quarter Moi avenue Twiga towers & Technical office Buruburu Rabai road next to flame tree motors.
            </p>
            <p className="text-gray-600 mb-2">P.o Box 5721, City square</p>
            <p className="text-gray-600 mb-2">+254 758515496</p>
            <p className="text-gray-600">info@donturesystems.com</p>
            <p className="text-gray-600">dontureholdings@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start">
              {/* <a href="#" className="text-blue-600 hover:text-blue-800 mr-4"><FaFacebook size={24} /></a> */}
              <a
                href="https://twitter.com/DontureH?ref_src=twsrc%5Etfw"
                className="text-blue-400 hover:text-blue-600 mr-4"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/dontureholdings?igshid=ZDdkNTZiNTM="
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
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
