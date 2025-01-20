import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-pcolor">
            <ul>
                <li><NavLink to="/dashboard/pets">My Pets</NavLink></li>
            </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;