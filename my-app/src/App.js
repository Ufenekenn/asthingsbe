import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';



import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' Component={About} />
        <Route path='/Login' Component={Login} />
        <Route path='/Signin' Component={SignIn} />
        <Route path='/Contact' Component={Contact} />
      </Routes>
      <Footer />
      </Router>
    </div>
      );
} 

export default App;
