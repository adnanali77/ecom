import Search from '../Search/Search.jsx';
import CustomButton from '../Button/CustomButton.jsx';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({products}) => {
  return (
    <div className="mainHeader">
      <Link to='/'>
        <div className="logo">
          <h1>Estore.</h1>
        </div>
      </Link>
      <Search products = {products}/>
      <CustomButton/>
    </div>
  )
}

export default Header;