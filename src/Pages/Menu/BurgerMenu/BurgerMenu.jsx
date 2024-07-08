import { NavLink, Outlet } from "react-router-dom";

const BurgerMenu = () => {
    return (
        <div>
            <div className="flex max-w-7xl mx-auto min-h-screen">
                {/* dashboard side bar */}
                <div className="w-64 min-h-full">
                    <ul className="p-text p-4 text-2xl flex flex-col justify-around font-bold h-full">
                        <>
                            <li>
                                <NavLink
                                    to='/menu/classic'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Classic Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/spicy'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Spicy Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/bbq'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    BBQ Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/veggie'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Veggie Burger
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/margherita'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Margherita Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/pepperoni'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Pepperoni Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/chicken'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    BBQ Chicken Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/supreme'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Supreme Pizza
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/cappuccino'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Classic Cappuccino
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/latte'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Vanilla Latte
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/caramel'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Iced Caramel
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/menu/mocha'
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >
                                    Mocha Coffee
                                </NavLink>
                            </li>
                        </>
                    </ul>
                </div>
                {/* dashboard contain */}
                <div className="flex-1">
                    <div className="w-4/5 mx-auto mb-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
