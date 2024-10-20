import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        {/* Logo or Title */}
        <div className="text-white font-extrabold text-3xl tracking-wide">
          <span className="hover:underline hover:text-gray-300 transition-colors duration-300">
            Rule Engine with AST
          </span> 
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none hover:text-gray-300 transition duration-300"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-8 items-center ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          {/** Create Rule **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Create Rule
            </Link>
          </li>

          {/** Combine Rules **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/combine-rules"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Combine Rules
            </Link>
          </li>

          {/** Evaluate Rule **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/evaluate-rule"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Evaluate Rule
            </Link>
          </li>

          {/** Display Rules **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/display-rules"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Display Rules
            </Link>
          </li>

          {/** Modify Rules **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/modify-rules"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Modify Rules
            </Link>
          </li>

          {/** Get All Rules **/}
          <li className="mb-2 md:mb-0">
            <Link
              to="/getall-rules"
              className='block md:inline-block bg-white bg-opacity-10 text-white p-3 rounded-xl text-lg font-semibold hover:bg-opacity-20 transition-transform transform hover:scale-110 ease-in-out duration-300'
            >
              Get All Rules
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
