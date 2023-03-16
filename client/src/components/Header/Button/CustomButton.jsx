import React, { useState, useContext } from 'react';
import './CustomButton.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../../Login/LoginDialog.jsx';
import { LoginContext } from '../../../Context/ContextProvider';
import Profile from '../Profile/Profile';

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { acc, setAccount } = useContext(LoginContext);

    const openDialog = () => {
        setOpen(true);
    }

  return (
    <div className='CustomButton'>
      <div className='buttonItem'>
        <div className='btn'>
        
          {acc ?  <Profile acc={acc} setAccount={setAccount}/>  :
          <button onClick={() => openDialog()}>LogIn</button>}
                
          
          <div className='ptext'>
            <p>Become a Seller</p>
          </div>
        </div>
        <div className='more'>
          <span>More</span>
          <KeyboardArrowDownIcon/>
        </div>
        <div className='cart'>
          <ShoppingCartIcon/>
          <span>Cart</span>
        </div>
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default CustomButton