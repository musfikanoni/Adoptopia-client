import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SiteFooter from '../pages/Shared/SiteFooter/SiteFooter';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default Main;