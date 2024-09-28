/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Links from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';

const Navlinks = ({isBigSidebar}) =>  {
    const {toggleSidebar, user} = useDashboardContext();
  return (
    <div className="nav-links">
    {Links.map((link) => {
            const {text, path, icon} = link;

            return (
                <NavLink end onClick={isBigSidebar ? null :toggleSidebar} to = {path} key={text} className='nav-link'>
                    <span className="icon">{icon}</span>
                    {text}
                    
                </NavLink>
            );
        })}
    </div>
  )
}

export default Navlinks;
