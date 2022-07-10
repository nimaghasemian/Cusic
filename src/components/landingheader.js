import React from 'react';
import { Component } from 'react';
//  import { Link, Router, Routes } from 'react-router-dom';
 import ArtistProfile from '../pages/artistProfile';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
  } from "react-router-dom";
  
const LandingHeader = ({ onRouteChange }) => {


    return(


            <div>
            
                <nav class="navbar-land navbar-default navbar-fixed-top" role="navigation">
                
                    {/* <div class="container"> */}
                    <div class="nav-links ">
                        
                        
                        
                    </div>
                    <div >
                    {/* <div className='profilepic' >
                        <img src={require("../img/userPP.jpg")} alt="Avatar" />
                    </div> */}
                        
                    {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
                    <div className='break-word' >
                    <ul class="  nav-links " >
                    {/* <a class="menu" href="#home">USERNAME</a> */}
                    <a className='menu-land'>About</a>
                        <div class="menu-land">
                        <li>About</li>
                        <li>Services</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        {/* <Router> */}
                        {/* <li><Link to="/inprocess">Home</Link></li>
                        <li><Link to="/inprocess">Announcement </Link></li>
                        <li><Link to="/inprocess">Collaboration</Link></li>
                        <li><Link to="/inprocess">Private</Link></li>                        
                        <li><Link to="/inprocess">profile</Link></li>
                        <li><Link to="/artistprofile">artistprofile</Link></li>
                        <li><Link to="/inprocess">Setting</Link></li> */}
                            {/* <Routes>
                                <Route path="/profile" element={<ArtistProfile/>} />
                            </Routes> */}

                        {/* </Router> */}
                        
                        </div>
                    </ul>
                    </div>
                    </div>
                </nav>
            </div>
    );


}

export default LandingHeader;