import { useState } from 'react';
import './Profile.css';

const Profile = ({ acc, setAccount }) => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
    }
    
return (
    <>
    <div className='profile'>
        <div onClick={handleClick} className='loginname'>
            <p>{acc}</p>
        </div>
        {
            open ?
            <div onClick={() => { handleClose(); logout();}} className='logout'>
            <span>Logout</span>
            </div> :
           <span className='abc'>logout</span>
        }
    </div>
    </>
)    
}

export default Profile;