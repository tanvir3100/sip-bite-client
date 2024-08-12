/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="w-full h-[100vh] flex justify-center items-center">This is not for you</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;