import React from "react";
import { Component } from "react";
import { Link ,  Route, Router, Routes } from "react-router-dom";
import SignUp from "./signup";
export class login extends Component {
    render() {
        return (
            <body>
            <section className="fdco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md6 text-center mb-5">
                            <h2 className="heading-section">CUSIC</h2>
                        </div>
                    </div>
                    <div class="row  justify-content-center">
                        <div class="col-md-7 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                                <h3 class="text-center mb-4">Login</h3>
                                <hr/>

                                <form action="#" className="signup-form">
                                    <div className="form-group mb-3">
                                        <label classNameName="label" for="email">Email Address or Username</label>
                                        <input type="text" className="form-control" placeholder="johndoe@gmail.com"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Password</label>
                                        <input id="password-field" type="password" className="form-control" placeholder="Password"/>
                                        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary submit px-3">Login</button>
                                    </div>
                                </form>
                                    {/* <div className="wrapper float:left">
                                        <input type="radio" className="topbtn" name="select" id="option-1" onChange={this.handleuserlogin} />
                                        <label for="option-1" class="option option-1 background-color: #01d28e">
                                            <span className="m-2"><img src={require('../img/2.png')} width="28" />User</span>
                                        </label>
                                        <input type="radio" className="topbtn" name="select" id="option-2" onChange={this.handleartistlogin} /> 
                                        <label for="option-2" class="option option-2">
                                            <span className=" m-2"> <img src={require('../img/1.png')} width="28" />Artist</span>
                                        </label> 
                                        
                                    </div> */}
                                
                                <section className="fdco-section">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7 col-lg-5 inputfield">
                                        <br/>
                                            
                                            <p>Create account! 
                                                      <Link to="/signup">sign up</Link>
                                            </p>
                                            
                                            {/* { gotologin ?(<Login/>):(<></>)} */}
                                                
                                            {/* <Link to="/login" className="btn btn-primary">Sign up</Link> */}
                                            </div>
                                    </div>
                                </div>
                                </section>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        );
    }
}

export default login;