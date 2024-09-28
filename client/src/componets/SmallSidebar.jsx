import { FaTimes } from 'react-icons/fa'
import Wrapper from  '../assets/wrappers/SmallSidebar'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashboardLayout';
import Navlinks from './Navlinks';

export default function SmallSidebar() {

    const {showSidebar, toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
     <div className = {showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
            <button onClick={toggleSidebar} className="close-btn" type = "button">
                <FaTimes />
            </button>

            <header>
                <Logo />
            </header>
            <Navlinks />

           
        </div>
     </div>
    </Wrapper>
  )
}
