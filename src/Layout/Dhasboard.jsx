import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import './Dashboard.css';
import { NavLink, Outlet } from "react-router-dom";


const Dhasboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="nav-link menu p-4 w-80 min-h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservations</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaShoppingCart /> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dhasboard;