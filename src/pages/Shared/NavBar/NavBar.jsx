
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from '../../../assets/site-logo.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import userIcon from '../../../assets/user.png';

const NavBar = () =>  {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then(() => { })
      .catch(error => console.log(error));
    }
    const navLinks = <>
            <Link className="text-[16px]" to='/'>Home</Link>
            <Link className="text-[16px]" to='/petList'>Pet Listing</Link>
            <Link className="text-[16px]" to='/donationCampaign'>Donation Campaigns</Link>
        </>
  return (
    <div className="fixed z-10 backdrop-blur-lg top-0 bg-opacity-70 bg-black text-white w-full">
    <Navbar className="max-w-screen-xl mx-auto bg-transparent">
        
      <Navbar.Brand>
      
        <img src={logo} className="mr-3 h-16" alt="" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Adoptopia</span>
      </Navbar.Brand>
      
      <div className="flex md:order-2 gap-3">
        {
          user ? <>
              <div className="flex gap-5 items-center">
                  <div className="group">
                      {
                          user.photoURL ? (
                              <>
                                <Dropdown arrowIcon={true} inline
                              label={<Avatar alt="" className="h-12" img={user?.photoURL} rounded />
                              }>
                                <Dropdown.Header>
                                    <span className="block text-sm">{user?.displayName || 'User'}</span>
                                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                                  </Dropdown.Header>
                                  <Dropdown.Item><Link to="/dashboard/addPet">Dashboard</Link></Dropdown.Item>
                                  <Dropdown.Item><Button onClick={handleLogOut}>Log out</Button></Dropdown.Item>
                                </Dropdown>
                              <Navbar.Toggle />
                              </>
                          ) : (
                            <>
                              <Dropdown arrowIcon={true} inline
                                label={<Avatar alt="" className="h-12" img={userIcon} rounded />
                                }>
                                  <Dropdown.Header>
                                    <span className="block text-sm">{user?.displayName || 'User'}</span>
                                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                                  </Dropdown.Header>
                                  <Dropdown.Item><Link to="/dashboard/addPet">Dashboard</Link></Dropdown.Item>
                                  <Dropdown.Item><Button onClick={handleLogOut}>Log out</Button></Dropdown.Item>
                              </Dropdown>
                              <Navbar.Toggle />
                            </>
                              
                          )
                      }

                  </div>
                
              </div>
          </> : <>
            <Link to="/login">
              <Button className="bg-pcolor text-xl font-bold tracking-wider">Login</Button>
              </Link>
            <Link to="/register">
              <Button className="bg-pcolor text-xl font-bold tracking-wider">Register</Button>
            </Link>
          </>
      }

      </div>
      <Navbar.Collapse>
          {navLinks}
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default NavBar;
