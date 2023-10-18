import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loadding } = useAuth()
    if (loadding || isAdminLoading) {
        return <process className="pro w-56"></process>
    }
    if (user && isAdmin) {
        return children
    }
    else {
        return <Navigate state={{ from: location }} to='/'></Navigate>
    }
};

export default AdminRoute;