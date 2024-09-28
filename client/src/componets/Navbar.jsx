import Wrapper from "../assets/wrappers/Navbar"
import {FaAlignLeft} from 'react-icons/fa'
import Logo from "./Logo"
import { LogoutContainer, ThemeToggle } from "."
import { useDashboardContext } from "../pages/DashboardLayout"
export default function Navbar() {

  const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button onClick={toggleSidebar} type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo/>
          <h4 className="logo-text">Dashboard</h4>        
      </div>
      <div className="btn-container">
        <ThemeToggle />
        <LogoutContainer />
      </div>
      </div>
    </Wrapper>
  )
}
