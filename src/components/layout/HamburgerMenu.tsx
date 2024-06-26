'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { TfiAlignJustify, TfiArrowRight, TfiHome, TfiPencilAlt } from 'react-icons/tfi';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
const route = useRouter ()
    return (
        <div className="flex justify-end flex-col">
            {/* Hamburger button, hidden on large screens and above */}
            <nav className='bg-black flex flex-row justify-end z-50 lg:z-50'>
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-200 p-5 focus:outline-none focus:text-gray-200 lg:hidden"
                    >
                        <TfiAlignJustify className="h-6 w-6" />
                    </button>
                    <div className='lg:p-5 lg:invisbled'>
                        <button
                            onClick={() => { route.push('/login') }}
                            className="text-white text-sm bg-green-500 rounded hover:bg-gray-400 px-4 py-1 focus:outline-none focus:text-gray-400 invisible lg:visible"
                        >
                            Sing In
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu, shown on large screens and above */}
            <div
                className={`fixed top-0 ${isOpen ? 'right-0' : '-right-full'} lg:left-0 lg:w-64 bg-gray-800 lg:bg-white text-white h-full shadow-lg z-50 lg:z-0 transition-transform duration-300 transform`}
            >
                <div className="p-4 flex justify-between items-center">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400  lg:hidden"
                    >
                        <TfiArrowRight className="h-6 w-6 m-2" />
                    </button>
                </div>
                <div className="p-4 lg:pt-24">
                    <a href="#" className=" py-2 px-4 text-white lg:text-gray-900 hover:bg-gray-500 rounded flex">
                        <TfiHome className="h-6 w-6 mx-2" />Home
                    </a>
                    <a href="/board" className=" py-2 px-4 text-white lg:text-gray-900 hover:bg-gray-500 rounded flex">
                        <TfiPencilAlt className="h-6 w-6 mx-2" />Our Blog
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
