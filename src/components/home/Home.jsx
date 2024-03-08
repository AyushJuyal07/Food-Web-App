import React from 'react';
import './Home.css';
import Vegi from "../../assets/vegi.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register');
  }

  return (
    <div className='home'>
      <div className='container'>
        <div className='text'>
          <h1>EAT HEALTHY</h1>
          <h1>STAY HEALTHY</h1>
          <div className='auth'>
            <button className='login' onClick={handleLoginClick}>Login</button>
            <button className='register' onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
        <div className='image'>
          <img src={Vegi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
