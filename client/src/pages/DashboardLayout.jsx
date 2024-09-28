/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, Navbar } from "../componets";
import { createContext, useState, useContext } from "react";
import { chechDefaulttheme } from "../App";

const DashboardContext = createContext();



const DashboardLayout = ({isDarkThemeEnabled}) => {
  const user = { name: "Afrid" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(chechDefaulttheme());


  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme);

  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
    
  };

  const Logout = () => {
    console.log("Logout the user");
  };
  return (
    <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, Logout }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout;
