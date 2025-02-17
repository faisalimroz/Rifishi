import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import logo from '../../assets/rishi.jfif';
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLocationPin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-white hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
    
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />Shipping
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaPhone className="text-yellow-500" /> Logistic
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaLocationPin className="text-yellow-500" /> Distribution

          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3 flex items-center gap-2">
            <IoIosArrowDropright  className="text-yellow-500" /> info@example.com
          </p>
          <p className="mt-2 flex items-center gap-2">
            <IoIosArrowDropright className="text-yellow-500" /> +8801682083636
          </p>
          <p className="mt-2 flex items-center gap-2">
            <IoIosArrowDropright className="text-yellow-500" /> 11-C, 11/4/12 Pallabi, Dhaka, Bangladesh

          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Rifishi Traders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

