import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import { Routes, Route, HashRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/SignUp';
import NoMatch from './Components/pages/NoMatch';
import {About} from './Components/pages/About';
import Explore from './Components/pages/Explore';
import Login from './Components/pages/Login';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='explore' element={<Explore />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
