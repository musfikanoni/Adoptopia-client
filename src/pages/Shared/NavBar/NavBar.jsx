
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from '../../../assets/site-logo.png';
import { Link } from "react-router-dom";

const NavBar = () =>  {
    const navLinks = <>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Our Menu</Link>
            <Link to='/order/salad'>Order Food</Link>
        </>
  return (
    <div className="fixed z-10 bg-opacity-80 bg-black text-white w-full">
    <Navbar className="max-w-screen-xl mx-auto bg-transparent">
        
      <Navbar.Brand>
      
        <img src={logo} className="mr-3 h-16" alt="" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Adoptopia</span>
      </Navbar.Brand>
      
      <div className="flex md:order-2 gap-3">
      <Button className="bg-pcolor">Login</Button>
      <Button className="bg-pcolor">Register</Button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            
            <Avatar alt="" className="h-12 hidden" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        
      </div>
      <Navbar.Collapse>
          {navLinks}
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
export default NavBar;
