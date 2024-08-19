import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUsersViewfinder } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaList, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";



const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/'); // Redirect to home or login page after logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

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
                        <NavLink to='/dashboard/review'>
                            <FaUsersViewfinder className="text-2xl" />
                            Add review
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="btn">
                            <FaSignOutAlt className="text-2xl" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <div className="w-4/5 mx-auto mb-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
