import { FaHandHoldingUsd, FaUser, FaUsers } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { RiFunctionAddLine } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import logo from '../assets/Home/logo.png';
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Avatar } from "flowbite-react";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const {user} = useContext(AuthContext);
    const name = user.displayName;
    const photo = user.photoURL;
    const email = user.email;

    return (
        <div className="flex">
            {/* Dashboard sidebar */}
            <NavBar></NavBar>
            <div className="w-72 min-h-screen mt-20 bg-pcolor">
                <ul className="">
                    {/* <li>
                        <Link to="/">
                            <div className="flex gap-3 items-center pb-5 p-7">
                                <img className="h-12 bg-white rounded-full" src={logo} alt="" />
                                <h3 className="text-3xl text-white font-bold">Adoptopia</h3>
                            </div>
                        </Link>
                    </li> */}

                    <div className="flex flex-wrap pt-10 justify-center gap-2">
                        <Avatar img={photo} rounded size="lg" bordered />
                    </div>
                    <div className="py-5">
                        <h3 className="text-xl text-white text-center font-semibold">{name}</h3>
                        <p className="text-center text-gray-100">{email}</p>
                    </div>

                    

                    {isAdmin ? (
                        <>
                            <NavLink to="/dashboard/adminDashboard">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <FaRegCircleUser className="text-3xl" />
                                        <span>Profile</span>
                                    </li>
                                )}
                            </NavLink>
                            <NavLink to="/dashboard/users">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <FaUsers className="text-3xl" />
                                        <span>Users</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/allPets">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <LuCat className="text-2xl" />
                                        <span>All Pets</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/allDonations">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <FaHandHoldingUsd className="text-3xl" />
                                        <span>All Donations</span>
                                    </li>
                                )}
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/dashboard/userDashboard">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`} 
                                    >
                                        <FaRegCircleUser className="text-3xl" />
                                        <span>User Dashboard</span>
                                    </li>
                                )}
                            </NavLink>
                            <NavLink to="/dashboard/addPet">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <MdAssignmentAdd className="text-2xl" />
                                        <span>Add a pet</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/myAddedPets">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <RiFunctionAddLine className="text-2xl" />
                                        <span>My added pets</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/adoptionRequest">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <VscGitPullRequestNewChanges className="text-2xl" />
                                        <span>Adoption Request</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/createDonation">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <IoCreateOutline className="text-2xl" />
                                        <span>Create Donation Campaign</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/myDonationCamp">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <FaHandHoldingUsd className="text-2xl" />
                                        <span>My Donation Campaigns</span>
                                    </li>
                                )}
                            </NavLink>

                            <NavLink to="/dashboard/myDonations">
                                {({ isActive }) => (
                                    <li
                                        className={`flex items-center gap-3 px-7 py-2 ${
                                            isActive ? 'text-pcolor bg-gray-900 font-bold' : 'text-white'
                                        }`}
                                    >
                                        <PiMoney className="text-2xl" />
                                        <span>My Donations</span>
                                    </li>
                                )}
                            </NavLink>
                        </>
                    )}
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
