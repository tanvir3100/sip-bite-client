import { NavLink, Outlet, useLocation } from "react-router-dom";
import Menupage from "../Menupage";

const BurgerMenu = () => {
    const location = useLocation('/menu')
    return (
        <div>
            <div className="flex max-w-7xl mx-auto h-full pt-5 md:pt-0">
                {/* dashboard side bar */}
                <div className="w-3/6 lg:w-2/6 min-h-full">
                    <ul className="h1-text p-0 sm:p-0 md:p-2 lg:p-4 md:text-2xl lg:text-3xl text-[#042F1A] flex flex-col justify-evenly h-full tracking-wider">
                        <>
                            <li>
                                <NavLink
                                    to='/menu/classic'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Classic Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/spicy'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Spicy Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/bbq'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    BBQ Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/veggie'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Veggie Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/margherita'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Margherita Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/pepperoni'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Pepperoni Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/chicken'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    BBQ Chicken Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/supreme'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Supreme Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/cappuccino'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Classic Cappuccino
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/latte'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Vanilla Latte
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/caramel'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Iced Caramel
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/mocha'
                                    className={({ isActive }) => isActive ? 'text-[#FDF6D2]' : ''}
                                >
                                    Mocha Coffee
                                </NavLink>
                            </li>
                        </>
                    </ul>
                </div>
                {/* dashboard contain */}
                <div className="w-3/6 lg:4/6">
                    <div className="w-full h-full mx-auto mb-10 flex justify-center items-center">
                        <div>
                            {
                                location.pathname === '/menu' ? <Menupage /> : <Outlet />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
