import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SiteFooter from '../pages/Shared/SiteFooter/SiteFooter';
import { useEffect, useState } from 'react';

const Main = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedMode = localStorage.getItem("isDark");
        return savedMode === "true"; // Convert string to boolean
      });
    
      // Handle dark mode toggle
      const handleDark = () => {
        const newMode = !isDark;
        setIsDark(newMode); // Update state
        localStorage.setItem("isDark", newMode); // Save to localStorage
      };
    
      // Apply or remove the "dark" class on <body>
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