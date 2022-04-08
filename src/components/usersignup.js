import React from "react";
import { Component } from "react";

export class usersignup extends Component {
    render() {
        return (
           
            <form action="#" className="signup-form">
                                <div className="form-group mb-3">
                                    <label className="label" for="name">Full Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" for="username">UserName</label>
                                    <input type="text" className="form-control" placeholder="John Doe"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label classNameName="label" for="email">Email Address</label>
                                    <input type="text" className="form-control" placeholder="johndoe@gmail.com"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="label" for="password">Password</label>
                                    <input id="password-field" type="password" className="form-control" placeholder="Password"/>
                                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign Up</button>
                                </div>
                            </form>
        );
    }
}

export default usersignup;