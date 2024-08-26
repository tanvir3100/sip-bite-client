import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUsersViewfinder } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaList, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { MdOutlineFastfood } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { Helmet } from "react-helmet-async";




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
        <>
            <Helmet>
                <title>SipBite | Dashboard</title>
            </Helmet>
            <div className="flex max-w-7xl mx-auto min-h-screen">
                {/* dashboard side bar */}
                <div className="w-64 min-h-full bg-[#D1A054] fixed">
                    <ul className="menu p-4 gap-2">
                        <li>
                            <NavLink to='/dashboard/adminHome'>
                                <FaHome className="text-2xl" />
                                Admin Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageItem'>
                                <FaList className="text-2xl" />
                                Manage items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addItems'>
                                <ImSpoonKnife className="text-2xl" />
                                Add Featured item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addPopularItem'>
                                <MdOutlineFastfood className="text-2xl" />
                                Add Popular item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addRecipeItem'>
                                <FaBowlFood className="text-2xl" />
                                Add Recipe items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addChefItem'>
                                <LuChefHat className="text-2xl" />
                                Add Chef
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addReview'>
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
                    <div className="w-4/5 mx-auto mb-10 ml-72">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
