import React from 'react';
import logo from '../assets/Logo.svg'; // .. is the important for linked.
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

 const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
        </Link>

        <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/" >About</Link>
                </li>
                <li>
                    <Link to="/" >Contact</Link>
                </li>
            </ul>
        </nav>

        {/* create button-> Login - SignUp - LogOut - Dashboard */} 
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&    // when user is not login then show this Login button.
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700'> 
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&    // when user is not login then show this Sign Up button.
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&     // when user is loged in then show this Log Out button.
                <Link to="/">
                    <button onClick={() =>{
                        setisLoggedIn(false);
                        toast.success("Logged Out");
                        }} 
                        className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&     // when user is loged in then show this Dashboard button.
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>

  )
}

export default Navbar;