import { useEffect } from "react";
import logo from "../../assets/logo/Patranee-02-01.png";
import { Link, useLocation } from "react-router-dom";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const year = new Date().getFullYear();
  return (
    <div>
      <footer
        className="bg-black 
      font-nunito tracking-wide relative overflow-hidden"
      >
        <div
          className="grid grid-cols-1
         container mx-auto sm:grid-cols-2
          lg:grid-cols-5 lg:gap-12 gap-8 py-14 px-12 relative z-20"
        >
          <div className="w-full ">
            <img src={logo} alt="" className="w- [500px] " />
          </div>
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">
              Company
            </h2>
            <ul className="space-y-5">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Home
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">
              Products
            </h2>
            <ul className="space-y-5">
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Shop
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/shop?category=Man"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Man
                </Link>
              </li> */}

              <li>
                <Link
                  to="/shop?category=Woman"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Woman
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">
              Patranee
            </h2>
            <ul className="space-y-5">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Return & Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="inline mr-1.5 h-4 w-4 shrink-0"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">
              Find Us
            </h2>
            <div className="space-y-5 flex flex-col text-white">
              <p>Mirpur, Dhaka</p>

              <a href="tel:+01886230003">01886-230003</a>
              <a href="mailto:Patranee@gmail.com">Patranee2024@gmail.com</a>
              <p>Every From 10Am to 8PM</p>
            </div>
            <div
              className=" relative z-3 space-x-2 text-white pt-5
                   justify-center pt- 5 
             "
            >
              <ul
                className="flex  space-x-4 
                   cursor-pointer"
              >
                <a href="/" target="_blank" className=" p-1 rounded-full">
                  <FaFacebookF size={20} />
                </a>
                <a href="" target="_blank" className=" p-1 rounded-full">
                  <FaInstagram size={20} />
                </a>
                <a href="" target="_blank" className=" p-1 rounded-full">
                  <FaLinkedin size={20} />
                </a>
                <a href="" target="_blank" className=" p-1 rounded-full">
                  {" "}
                  <FaXTwitter size={20} />
                </a>
                <a href="" target="_blank" className=" p-1 rounded-full">
                  <FaThreads size={20} />
                </a>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-600" />

        <div className="my-8 px-12 container mx-auto flex flex-wrap sm:justify-between gap-6 relative z-20">
          <div className="flex space-x-5">
            <a
              href="javascript:void(0)"
              className="text-gray-300 hover:text-white text-base transition-all"
            >
              <svg
                className="w-5 h-5 fill-gray-400 hover:fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
              .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"
                ></path>
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="text-gray-300 hover:text-white text-base transition-all"
            >
              <svg
                className="w-5 h-5 fill-gray-400 hover:fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                  0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
                ></path>
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="text-gray-300 hover:text-white text-base transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="fill-gray-400 hover:fill-white w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <p>
            {" "}
            <span className="text-sm text-gray-500 ">
              Copyright © {year}. All rights reserved by Patranee. Developed by
              <a
                href="https://weerodigital.com"
                target="_blank"
                className="hover:underline duration-300"
              >
                {" "}
                Weero Digital
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
