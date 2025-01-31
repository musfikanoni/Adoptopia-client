
import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { RiFunctionAddLine } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import logo from '../assets/Home/logo.png';
// import useAdoptionReq from "../hooks/useAdoptionReq";

const Dashboard = () => {
    //TODO
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* Dashboard sidebar */}
            <div className="w-72 min-h-screen bg-pcolor">
                <ul className="p-7">
                    <li>
                        <Link to="/">
                            <div className="flex gap-3 items-center pb-5">
                                <img className="h-12 bg-white rounded-full" src={logo} alt="" />
                                <h3 className="text-3xl text-white font-bold">Adoptopia</h3>
                            </div>
                        </Link>
                    </li>
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-3 py-2">
                                <FaUsers className="text-white text-3xl"></FaUsers>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/users">Users</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <LuCat className="text-white text-2xl"></LuCat>
                                <NavLink className="text-white font-bold text-md">All Pets</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <FaHandHoldingUsd className="text-white text-3xl"></FaHandHoldingUsd>
                                <NavLink className="text-white font-bold text-md">All Donations</NavLink>
                            </li>
                        
                        </>:<>
                            <li className="flex items-center gap-3 py-2">
                            <MdAssignmentAdd className="text-2xl text-white"></MdAssignmentAdd>
                            <NavLink className="text-white font-bold text-md" to="/dashboard/addPet">Add a pet</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <RiFunctionAddLine className="text-2xl text-white"></RiFunctionAddLine>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/myAddedPets">My added pets</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <VscGitPullRequestNewChanges className="text-2xl text-white"></VscGitPullRequestNewChanges>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/adoptionRequest">Adoption Request</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <IoCreateOutline className="text-2xl text-white"></IoCreateOutline>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/createDonation">Create Donation Campaign</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <FaHandHoldingUsd className="text-2xl text-white"></FaHandHoldingUsd>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/myDonationCamp">My Donation Campaigns</NavLink>
                            </li>
                            <li className="flex items-center gap-3 py-2">
                                <PiMoney className="text-2xl text-white"></PiMoney>
                                <NavLink className="text-white font-bold text-md" to="/dashboard/myDonations">My Donations</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;