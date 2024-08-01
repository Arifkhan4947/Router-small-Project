import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setisLoggedIn}) => {

    const navigate  = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    // password show ...... like so, we make state variable for visible and unvisible of the password.
    const [showPassword, setShowPassword] = useState(false);


    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        // Here we se in console formData email and password
        console.log("Printing the formData");
        console.log(formData);
        navigate("/dashboard");

    } 

  return (
    <form 
        className='flex flex-col w-full gap-y-4 mt-6 '
        onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type='email' 
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")} 
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
            />

                {/* This is for eye icon in password input  for making visible anfd invisible*/}
            <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={ () => setShowPassword((prev) => !prev)}>

                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                }
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>

        </label>

        {/* If button having in form tag then we not use here onClick handler (we use onSubmit in form tag as you can see the form tag).  */}
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;