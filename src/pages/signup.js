import React from "react";
import { Component } from "react";
import UserSignup from "../components/usersignup";
import ArtistSignUp from "../components/artistsignup";
import Login from "./login";
import { Link } from "react-router-dom";
export class signup extends Component {

    state = {
        isUserSignUpActive : true,
        gotologin : false,
    }

    handleuserlogin = () =>{
        // const userIsOn = isUserSignUpActive ;

        this.setState({isUserSignUpActive : true});
        // console.log(this.state.isUserSignUpActive);
    }

    handleartistlogin = () =>{
    
        this.setState({isUserSignUpActive : false});
    }

    handlelogin = () =>{

        // this.setState({gotologin : true});
        return(
            <Login/>
        )

    }

    render() {
        const {isUserSignUpActive} = this.state ; 
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
                                <h3 class="text-center mb-4">Create Your Account</h3>
                                <hr/>
                                
                                    <div className="wrapper float:left">
                                        <input type="radio" className="topbtn" name="select" id="option-1" onChange={this.handleuserlogin} />
                                        <label for="option-1" class="option option-1 background-color: #01d28e">
                                            <span className="m-2"><img src={require('../img/2.png')} width="28" />User</span>
                                        </label>
                                        <input type="radio" className="topbtn" name="select" id="option-2" onChange={this.handleartistlogin} /> 
                                        <label for="option-2" class="option option-2">
                                            <span className=" m-2"> <img src={require('../img/1.png')} width="28" />Artist</span>
                                        </label> 
                                        
                                    </div>
                                
                                <br/>
                                <section className="fdco-section">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7 col-lg-5 inputfield">
                                        <br/><br/>
                                            {/* <div className="login-wrap p-4 p-md-5"></div> */}
                                            { isUserSignUpActive ?(
                                                <UserSignup/>
                                            ):(
                                                <ArtistSignUp/>
                                            )}
                                            <p>I'm already a member! <Link to="/login">login</Link></p>
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

export default signup;