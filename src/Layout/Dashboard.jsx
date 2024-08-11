import { NavLink, Outlet } from "react-router-dom";
import { LuShoppingCart } from 'react-icons/lu';
import { ImSpoonKnife } from "react-icons/im";
import { FaList, FaUser } from "react-icons/fa";
import { FaHome } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className="flex max-w-7xl mx-auto min-h-screen">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-[#D1A054]">
                <ul className="menu p-4 gap-2">
                    <li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome className="text-2xl" />
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                            <ImSpoonKnife className="text-2xl" />
                            Add items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItem'>
                            <FaList className="text-2xl" />
                            Manage items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'>
                            <FaUser className="text-2xl" />
                            All users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome className="text-2xl" />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <LuShoppingCart className="text-2xl" />
                            add review
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard contain */}
            <div className="flex-1">
                <div className="w-4/5 mx-auto mb-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;