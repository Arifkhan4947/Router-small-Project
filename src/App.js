
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    // Parent div 
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

      <Routes>

        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}/>}/>``
        <Route path='/signup' element={<Signup setisLoggedIn={setisLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
        
        }/>

      </Routes>

    </div>
  );
}

export default App;  
