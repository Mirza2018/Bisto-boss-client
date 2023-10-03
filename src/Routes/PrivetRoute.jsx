import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const location=useLocation();
    const { user, loadding } = useContext(AuthContext)
    if (loadding) {
        return <h1>Loadding.....</h1>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={{from:location}} to='/login'></Navigate>
    }
};

export default PrivetRoute;