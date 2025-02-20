import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SiteFooter from '../pages/Shared/SiteFooter/SiteFooter';
import { useEffect, useState } from 'react';

const Main = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedMode = localStorage.getItem("isDark");
        return savedMode === "true"; 
      });
    
      const handleDark = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        localStorage.setItem("isDark", newMode); 
      };

      useEffect(() => {
        if (isDark) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [isDark]);
    
    return (
        <div className={`${isDark ? "dark" : ""}`}>
            <NavBar handleDark={handleDark} isDark={isDark} ></NavBar>
            <Outlet context={isDark} />
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default Main;