
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';


const LogoutContainer = () => {

    const [showLogout, setShowLogout] = useState(false);
    const {user, Logout} = useDashboardContext();
  return (
    <Wrapper>
        <button onClick={() => {setShowLogout(!showLogout)}} type = "button" className="btn logout-btn">
        
        <FaUserCircle />
        {user ?.name}
        <FaCaretDown />
        </button>
        <div className= {showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button onClick={Logout} type = 'button' className="dropdown-btn">Logout</button>
        </div>


    </Wrapper>
  )
}

export default LogoutContainer
