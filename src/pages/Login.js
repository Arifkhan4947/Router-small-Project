import React from 'react'
import Template from '../components/Template';
import loginImg from '../assets/login.png';

const Login = ({setisLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setisLoggedIn= {setisLoggedIn}
    />
  )
}

export default Login;
