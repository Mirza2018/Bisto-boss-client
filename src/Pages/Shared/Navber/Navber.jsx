import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const { cart } = useCart()
    const [isAdmin]=useAdmin()
    //console.log(cart);
    const lis = <>
        <li ><NavLink className=""to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order</NavLink></li>
        {user && <>
        <li><NavLink to={isAdmin?'/dashboard/adminhome':'/dashboard/userhome'}>Dashbord</NavLink></li>

        <li><NavLink to='/dashboard/mycart'>
            <button className="btn">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button></NavLink></li>
        
        </>}
        
        {user ? <>
            <li> <button onClick={logOut} className="btn btn-ghost">Log Out</button></li>

        </> : <>
            <li><NavLink to='/login'>Login</NavLink></li>
        </>}

    </>

    //console.log(user);
    return (
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black bg-white">
                        {lis}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center font-bold ">
                    {lis}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default Navber;