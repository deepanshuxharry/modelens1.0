import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#000] text-gray-800 border-t border-gray-200">
      <div className=" mx-auto py-8 px-6 footer_css">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 foot_logo">
          {/* Logo */}
          <div className="flex items-center justify-start ">
            <img
              src="logo.png" // Replace with your logo path
              alt="Logo"
              className="h-10 w-10 mr-3"
            />

          </div>

          {/* Services */}
          <div>
      <h3 className="font-semibold text-lg text-purple-600 mb-4">Services</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/our-models" className="hover:text-purple-500">
            Models
          </Link>
        </li>
        <li><a href="#" className="hover:text-purple-500">Photographer</a></li>
        <li><a href="#" className="hover:text-purple-500">Makeup Artists</a></li>
      </ul>
    </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg text-purple-600 mb-4">Contact</h3>
            <p className="text-gray-700">New Delhi, Delhi</p>
            <p className="text-gray-700">+91 8178517101</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-semibold text-lg text-purple-600 mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="https://drive.google.com/file/d/1V6d0rccG1SIHewm3YGgiBmJxO__a5cJB/view" className="hover:text-purple-500">Terms and Conditions</a></li>
              {/* <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li> */}

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} LM Photography. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
