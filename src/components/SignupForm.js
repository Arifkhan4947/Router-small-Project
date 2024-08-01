import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setisLoggedIn}) => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }

    // this function for Create Account button which we provide onSubmit handler in form Tag.
    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setisLoggedIn(true);
        toast.success("Account Created");
        const accountData= {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final account data");
        console.log(finalData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Intructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
                className={`${accountType === "student" ?  // if we click student button then set property this one. (by default set "student" see line no -> 22)
                "bg-richblack-900 text-richblack-5" :  
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>
                Student
            </button>

            <button 
                className={`${accountType === "instructor" ?  // if we click instructor button then set property this one.
                "bg-richblack-900 text-richblack-5" : 
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        {/* here we create form */}
        <form onSubmit={submitHandler}>
            {/* This div only for firstName and lastName */}
            <div className='flex gap-x-4 mt-[20px]'> 
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name 
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter Frist Name'
                        value={formData.firstName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name 
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
                    />
                </label>
            </div>
            
            {/* email Add */}
            <div className='w-full mt-[20px]'>
            <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
                        />
            </label>
            </div>

            

            {/* Create password and confirm password */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className=' w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type={showCreatePassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
                    />

                            {/* This is for eye icon in password input  for making visible and invisible. Here using two variable (showCreatePassword, setShowCreatePassword) */}      
                    <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={ () => setShowCreatePassword((prev) => !prev)}>

                        {showCreatePassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                        }
                    </span>
                </label>
                
                
                <label className='w-full relative '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-white'
                    />

                            {/* This is for eye icon in password input  for making visible and invisible. Here using two variable (showConfirmPassword, setShowConfirmPassword), */}      
                    <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={ () => setShowConfirmPassword((prev) => !prev)}>

                        {showConfirmPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                        }
                    </span>
                </label>
                
            </div>

            {/* Create a button */}
            {/* If button having in form tag then we not use here onClick handler in button tag. (we use onSubmit in form tag as you can see the form tag).  */}
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account 
            </button>

        </form>




    </div>
  )
}

export default SignupForm;