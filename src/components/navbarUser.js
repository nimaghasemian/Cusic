import React from 'react';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes,
  } from "react-router-dom";
  
const NavbarUser = ({ onRouteChange }) => {


    return(


            <div>
            
                <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                
                    {/* <div class="container"> */}
                    <div class="nav-links ">
                        
                        
                        
                    </div>
                    <div >
                    <div className='profilepic' >
                        <img src={require("../img/userPP.jpg")} alt="Avatar" />
                    </div>
                        
                    {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
                    <div className='break-word' >
                    <ul class="  nav-links m-2" >
                    <a class="menu" href="#home">USERNAME</a>
                        <div class="menu">
                        <li><a href="/">Overview</a></li>
                        <li><a href="/">Reports</a></li>
                        <li><a href="/">Library</a></li>
                        <li><a href="/">Followers</a></li>
                        <li><a href="/">Followeing</a></li>
                        <li><Link to="/userprofile">profile</Link></li>
                        <li><a href="/">news</a></li>
                        </div>
                    </ul>
                    </div>
                    </div>
                </nav>
            </div>
    );


}
// export class NavbarUser extends Component {

//     state = {
       
//     }

//     render() {
        
//     }
// }
export default NavbarUser;