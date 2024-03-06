import React from 'react'
import "./Home.css"
import Vegi from "../../assets/vegi.png"

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <div className='text'>
                <h1>EAT HEALTHY</h1>
                <h1>STAY HEALTHY</h1>
                <div className='auth'>
                    <button className='login'>Login</button>
                    <button className='register'>Register</button>
                </div>
            </div>
            <div className='image'>
                <img src={Vegi} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home