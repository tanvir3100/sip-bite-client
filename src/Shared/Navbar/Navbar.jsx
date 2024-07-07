import { NavLink } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div>
                <div className="bg-[#A30000] text-[#FDF6D2] text-center p-1 tracking-wider">
                    <Marquee>
                        <p className='p-text font-bold text-2xl p-2'>Get 20% Off on Your First Order! 🍔🍕🥤 Get 20% Off on Your First Order! 🍔🍕🥤 Get 20% Off on Your First Order! 🍔🍕🥤</p>
                    </Marquee>
                </div>
            </div>
            <div>
                <div className="navbar bg-[#FFB500] text-[#042F1A]">
                    <div className="navbar-center">
                        <div className="dropdown w-full text-center">
                            <div onClick={toggleNavbar} tabIndex={0} role="button" className="btn btn-ghost md:hidden bg-[#042F1A] text-white text-center">
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                )}
                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu menu-lg dropdown-content bg-[#FFB500] z-[1] mt-3 w-[425px] p-2 text-center shadow font-bold ${isOpen ? 'block' : 'hidden'} flex justify-center transition-all duration-300 ease-in-out top-11 -right-[355px]`}>
                                <li className='flex justify-center w-full'>
                                    <NavLink to="/menu" style={({ isActive }) => ({ fontWeight: isActive ? "#FDF6D2" : "" })}>
                                        Menu
                                    </NavLink>
                                </li>
                                <li className='flex justify-center w-full'>
                                    <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? "#FDF6D2" : "" })}>
                                        About
                                    </NavLink>
                                </li>
                                <li className='flex justify-center w-full'>
                                    <NavLink to="/recipes" style={({ isActive }) => ({ fontWeight: isActive ? "#FDF6D2" : "" })}>
                                        Recipes
                                    </NavLink>
                                </li>
                                <li className='flex justify-center w-full'>
                                    <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? "#FDF6D2" : "" })}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:justify-around font-bold w-screen">
                        <ul className="menu menu-horizontal px-1 hidden md:block text-xl">
                            <li>
                                <NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? "bold" : "" })}>
                                    Menu
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="menu menu-horizontal px-1 hidden md:block text-xl">
                            <li>
                                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "bold" : "" })}>
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <a className="logo-text btn btn-ghost hover:bg-[#FFB500] text-4xl"><NavLink to=''>
                            SipBite</NavLink></a>
                        <ul className="menu menu-horizontal px-1 hidden md:block text-xl">
                            <li>
                                <NavLink to="/recipes" style={({ isActive }) => ({ color: isActive ? "bold" : "" })}>
                                    Recipes
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="menu menu-horizontal px-1 hidden md:block text-4xl">
                            <li>
                                <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "bold" : "" })}>
                                    <button className='btn rounded-full text-xl border-none px-16 text-white bg-[#042F1A]'>
                                        Contact
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;