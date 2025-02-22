import React from "react";
import { FaPhone, FaEnvelope, FaLocationPin } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/rishi.jfif";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-24 h-24 mb-3" />
          <p className="text-sm">Your trusted trading partner.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/career" className="text-white hover:text-gray-300">Career</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-yellow-500" /> info@rifishitraders.com
          </p>
          <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
            <FaPhone className="text-yellow-500" /> +8801682083636
          </p>
          <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
            <FaLocationPin className="text-yellow-500" /> 11-C, 11/4/12 Pallabi, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-white text-sm px-4">
        &copy; {new Date().getFullYear()} Rifishi Traders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;