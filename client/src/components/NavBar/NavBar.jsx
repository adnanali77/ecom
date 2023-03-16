import './NavBar.css';
import { navData } from '../../Constants/data.js';
const NavBar = () => {
  return (
    <div className='mainNavbar'>
        {
            navData.map((data) => (
                <div key={data._id} className='navItems' >
                    <img src={data.url} alt='nav'/>
                    <p>{data.text}</p>
                </div>
            ))
        }
    </div>
  )
}

export default NavBar;