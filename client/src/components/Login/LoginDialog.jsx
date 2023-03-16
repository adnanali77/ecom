import React, { useState, useEffect, useContext } from 'react';
import './LoginDialog.css';
import { LoginContext } from '../../Context/ContextProvider';
import loginview from '../../Images/loginview.png';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../Service/api.js';


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen }) => {
   
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    const { setAccount } = useContext(LoginContext);
    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        //...signup this is object detructuring to prevent override of previous values
        //[e.target.name] if we use variable as key we have to write it into squre braces
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
            
        }
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        showError(false);
    }
    
    return (
        // <dialog open={open} onClose={handleClose}>
            <Dialog className='dialogBox' open={open} onClose={handleClose} >
                {/* onClose={handleClose} */}
                <div className='dialogContainter'>
                    <div className='left'>
                        <div className='heading'>
                            <h1>{account.heading}</h1>
                            <p>{account.subHeading}</p>
                        </div>
                        <div className='imgClass'>
                            <img src={loginview} alt='img'/>
                        </div>
                    </div>
                    {
                        account.view === 'login' ?
                        <div className='right'>
                            <form>
                                <input type='text' onChange={(e) => onValueChange(e)} name='username' placeholder='Enter Your UserName'/>
                                { error && <p className='errorText'>Please enter valid UserName</p> }
                                <input type='password' onChange={(e) => onValueChange(e)} name='password' placeholder='Enter Your Password'/>
                            </form>
                            <div className='rightSec'>
                                <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <button className='boxBtn' onClick={() => loginUser()}>LogIn</button>
                                <p className='bottomText' onClick={() => toggleSignup()}>New to EStore? Create an account</p>
                            </div>
                        </div> :
                        <div className='right'>
                        <form>
                            <input type='text' onChange={(e) => onInputChange(e)} name='firstname' placeholder='Enter Your First Name'/>
                            <input type='text' onChange={(e) => onInputChange(e)} name='lastname' placeholder='Enter Your Last Name'/>
                            <input type='email' onChange={(e) => onInputChange(e)} name='email' placeholder='Enter Your Email'/>
                            <input type='text' onChange={(e) => onInputChange(e)} name='phone' placeholder='Enter Your Phone No.'/>
                            <input type='text' onChange={(e) => onInputChange(e)} name='username' placeholder='Enter Your UserName'/>
                            <input type='password' onChange={(e) => onInputChange(e)} name='password' placeholder='Enter Your Password'/>
                        </form>
                        <div className='rightSec'>
                            <button className='boxBtn' onClick={() => signupUser()} >Continue</button>
                        </div>
                    </div>

                    }
                    <CloseIcon className='close' onClick={handleClose}/>
                </div> 
            </Dialog>
        // </dialog>
    )
}

export default LoginDialog;