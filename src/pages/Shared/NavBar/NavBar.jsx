import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from '../../../assets/site-logo.png';
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import userIcon from '../../../assets/user.png';
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useMemo } from "react";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = ({handleDark, isDark}) =>  {
    const location = useLocation();
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
        navigate('/')
    }

    const navLinks = <>
        <Link to='/' 
            className={`cursor-pointer text-[16px] ${location.pathname === '/' ? 'text-pcolor border-b-2 border-pcolor' : ''}`}
        >
            Home
        </Link>
        <Link to='/petList' 
            className={`cursor-pointer text-[16px] ${location.pathname === '/petList' ? 'text-pcolor border-b-2 border-pcolor' : ''}`}
        >
            Pet Listing
        </Link>
        <Link to='/donationCampaign' cd 
            className={`cursor-pointer text-[16px] ${location.pathname === '/donationCampaign' ? 'text-pcolor border-b-2 border-pcolor' : ''}`}
        >
            Donation Campaigns
        </Link>
    </>

    const dashboardPath =  isAdmin ? '/dashboard/adminDashboard' : '/dashboard/userDashboard';



    return (
        <div className="fixed z-10 backdrop-blur-lg top-0 bg-opacity-70 bg-black text-white w-full">
            <Navbar className="max-w-screen-xl mx-auto bg-transparent">
                <Navbar.Brand>
                    <img src={logo} className="mr-3 h-16" alt="" />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Adoptopia</span>
                </Navbar.Brand>

                <div className="flex md:order-2 gap-3">
                    <button onClick={handleDark} className="p-3 rounded-full">
                        {isDark ? (
                            <LuSun className="dark:text-white" size={20} />
                        ) : (
                            <FaMoon size={20} />
                        )}
                    </button>

                    {user ? (
                        <div className="flex gap-5 items-center">
                            <div className="group">
                                <Dropdown arrowIcon={true} inline label={
                                    <Avatar alt="" className="h-12" img={user?.photoURL || userIcon} rounded />
                                }>
                                    <Dropdown.Header>
                                        <span className="block text-sm">{user?.displayName || 'User'}</span>
                                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item><Link to={dashboardPath}>Dashboard</Link></Dropdown.Item>
                                    <Dropdown.Item><button className="bg-pcolor w-full py-2 px-5 rounded-lg font-bold" onClick={handleLogOut}>Log out</button></Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button className="bg-pcolor text-xl font-bold tracking-wider">Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button className="bg-pcolor text-xl font-bold tracking-wider">Register</Button>
                            </Link>
                        </>
                    )}
                </div>

                <Navbar.Collapse>
                    {navLinks}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
