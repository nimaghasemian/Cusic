import React from "react";
import { Component } from "react";

export class artistsignup extends Component {
    render() {
        return (
            <form action="#" className="signup-form">
                <div className="form-group mb-3">
                    <label className="label" for="name">Full Name</label>
                    <input type="text" className="form-control" placeholder="John stone"/>
                </div>
                <div className="form-group mb-3">
                    <label className="label" for="username">UserName</label>
                    <input type="text" className="form-control" placeholder="Johns"/>
                </div>
                <div className="form-group mb-3">
                    <label className="label" for="career">Career starting point</label>
                    <input type="date" className="form-control" value="today" min="2018-01-01" max="2018-12-31"/>
                </div>
                {/* <div className=" wrapper-left form-group mb-3"> */}
                    {/* <input type="radio" name="select" id="option-band" uncheck/>  */}
                    {/* <label for="option-band" class="option option-band">
                        <span className="label option-band">Is this a band ?</span>
                        <input className="m-2 option-band" type="radio" name="select" id="option-band" />
                    </label> */}
                    
                {/* </div> */}
                <div className="form-group mb-3">
                    <label classNameName="label" for="email">Email Address</label>
                    <input type="text" className="form-control" placeholder="john@gmail.com"/>
                </div>
                <div className="form-group mb-3">
                    <label className="label" for="password">Password</label>
                    <input id="password-field" type="password" className="form-control" placeholder="Password"/>
                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group mb-3">
                    <label className="label" for="profilepicture">Profile picture</label>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign Up</button>
                </div>
            </form>

        );
    }
}

export default artistsignup;