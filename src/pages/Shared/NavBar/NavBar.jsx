
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
            <Link className="text-[16px]" to='/menu'>Pet Listing</Link>
            <Link className="text-[16px]" to='/order/salad'>Donation Campaigns</Link>
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
                        <Link>
                        {
                            user.photoURL ? (
                                <>
                                  <Dropdown arrowIcon={false} inline
                                label={<Avatar alt="" className="h-12" img={user.photoURL} rounded />
                                }>
                                  <Dropdown.Header>
                                      <span className="block text-sm">{user.displayName || 'User'}</span>
                                      <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item><Button onClick={handleLogOut}>Log out</Button></Dropdown.Item>
                                  </Dropdown>
                                <Navbar.Toggle />
                                </>
                            ) : (
                              <>
                                <Dropdown arrowIcon={false} inline
                                  label={<Avatar alt="" className="h-12" img={userIcon} rounded />
                                  }>
                                    <Dropdown.Header>
                                      <span className="block text-sm">{user.displayName || 'User'}</span>
                                      <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item><Button onClick={handleLogOut}>Log out</Button></Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                              </>
                                
                            )
                        }
                        </Link>
                        {/* <div className='absolute right-32 mt-2 w-40 bg-white text-gray-600 text-sm rounded-lg p-2 hidden group-hover:block'>
                            {user.displayName || 'User'}
                        </div> */}
                    </div>
                    {/* <button className='btn'>Log Out</button> */}
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

      
        {/* <Dropdown
          arrowIcon={true}
          inline
          label={
            
            <Avatar alt="" className="h-12" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Log out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
         */}
      </div>
      <Navbar.Collapse>
          {navLinks}
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default NavBar;
