
import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { RiFunctionAddLine } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
// import useAdoptionReq from "../hooks/useAdoptionReq";

const Dashboard = () => {
    //TODO
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* Dashboard sidebar */}
            <div className="w-72 min-h-screen bg-pcolor">
                <ul className="p-4">
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-3">
                                <FaUsers></FaUsers>
                                <NavLink to="/dashboard/users">Users</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <LuCat></LuCat>
                                <NavLink>All Pets</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaHandHoldingUsd></FaHandHoldingUsd>
                                <NavLink>All Donations</NavLink>
                            </li>
                        
                        </>:<>
                            <li className="flex items-center gap-3">
                            <MdAssignmentAdd className="text-xl"></MdAssignmentAdd>
                            <NavLink to="/dashboard/addPet">Add a pet</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <RiFunctionAddLine className="text-xl"></RiFunctionAddLine>
                                <NavLink to="/dashboard/myAddedPets">My added pets</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <VscGitPullRequestNewChanges className="text-xl"></VscGitPullRequestNewChanges>
                                <NavLink to="/dashboard/adoptionRequest">Adoption Request</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCreateOutline className="text-xl"></IoCreateOutline>
                                <NavLink to="/dashboard/createDonation">Create Donation Campaign</NavLink>
                            </li>
                            <div className="border-b"></div>
                            <li className="flex items-center gap-3">
                                <FaHandHoldingUsd className="text-xl"></FaHandHoldingUsd>
                                <NavLink to="/dashboard/MyDonationcampains">My Donation Campaigns</NavLink>
                            </li>
                            <li className="flex items-center gap-3">
                                <PiMoney className="text-xl"></PiMoney>
                                <NavLink to="/dashboard/myDonations">My Donations</NavLink>
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