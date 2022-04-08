import React from "react";
import { Component } from "react";
import UserSignup from "../components/usersignup";
import ArtistSignUp from "../components/artistsignup";


export class signup extends Component {

    state = {
        isUserSignUpActive : true,
    }

    handleuserlogin = () =>{
        // const userIsOn = isUserSignUpActive ;

        this.setState({isUserSignUpActive : true});
        // console.log(this.state.isUserSignUpActive);
    }

    handleartistlogin = () =>{
    
        this.setState({isUserSignUpActive : false});
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
                    <div class="row justify-content-center">
                        <div class="col-md-7 col-lg-5">
                            <div class="login-wrap p-4 p-md-5">
                                <h3 class="text-center mb-4">Create Your Account</h3>
                                <hr/>
                                <div className="wrapper">
                                    <input type="radio" name="select" id="option-1" Checked onChange={this.handleuserlogin} />
                                    <input type="radio" name="select" id="option-2" onChange={this.handleartistlogin} /> 
                                    <label for="option-1" class="option option-1">
                                        <span className="m-2">User</span>
                                    </label>
                                    <label for="option-2" class="option option-2">
                                        <span className="m-2">Artist</span>
                                    </label> 
                                    
                                </div>
                                <section className="fdco-section">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7 col-lg-5">
                                        <br/><br/>
                                            {/* <div className="login-wrap p-4 p-md-5"></div> */}
                                            { isUserSignUpActive ?(
                                                <UserSignup/>
                                            ):(
                                                <ArtistSignUp/>
                                            )}
                                            <p>I'm already a member! <a data-toggle="tab" href="./login.js">login</a></p>
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