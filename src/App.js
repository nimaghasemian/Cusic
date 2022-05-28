import logo from './logo.svg';
import './App.css';
import SignUp, { signup } from './pages/signup';
import UserHomePage from './pages/userHomePage';
import ArtistHomePage from './pages/artistHomePage';
import ArtistProfile from './pages/artistProfile';
import Userprofile from './pages/userProfile';
import Login from './pages/login';
import { Outlet, Link } from "react-router-dom";
import react from 'react';

import { Component } from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


function App() {
    return (
      <div>
      {/* <ArtistProfile/> */}
      {/* <Userprofile/> */}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">sign up</Link>
            </li>
            <li>
              <Link to="/userhome">user home</Link>
            </li>
            <li>
              <Link to="/artisthome">artist home</Link>
            </li>
            <li>
              <Link to="/userprofile">artist home</Link>
            </li>
            <li>
              <Link to="/artistprofile">artist home</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/userhome" element={<UserHomePage/>} />
            <Route path="/artisthome" element={<ArtistHomePage/>} />
            <Route path="/artistprofile" element={<ArtistProfile/>} />
            <Route path="/userprofile" element={<Userprofile/>} />
            
            
          </Routes>
          
        </div>
      </Router>
      </div>
    );
}
export default App;
