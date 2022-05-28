import React from 'react';
import { Component } from 'react';
import NavbarUser from '../components/navbarUser';
import Footerr from '../components/footer';

export class Userprofile extends Component {

    state = {
       
    }

    render() {
        return(
            <div className='background_wall'>
                <header>
                    <NavbarUser/>
                </header> 
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="iq-card-user-profile">
                            <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                                <div class="iq-header-title">
                                    <h4 class="card-title mb-0">Personal Details</h4>
                                </div>
                            </div>
                            <div class="iq-card-body">
                                <ul class="list-inline p-0 mb-0">
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Birthday</h6>
                                            <p class="mb-0">3rd March</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Address</h6>
                                            <p class="mb-0">Landon</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Phone</h6>
                                            <p class="mb-0">(010)987 543 201</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Email</h6>
                                            <p class="mb-0">Barry@example.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Twitter</h6>
                                            <p class="mb-0">@Barry</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Twitter</h6>
                                            <p class="mb-0">@Barry_Tech</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                <br/>
                <br/>
                <br/>
                <br/>
                
                <footer>

                    <Footerr/>
                </footer>
            </div>
        );
    }
}
export default Userprofile;