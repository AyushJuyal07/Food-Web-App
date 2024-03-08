import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register'; 
import Plan from './components/plan/Plan';
import About from './components/about/About';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />

        <Route path="/login" Component={Login} />
        <Route path="/plan" Component={Plan}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
