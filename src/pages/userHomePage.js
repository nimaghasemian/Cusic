import React from 'react';
import { Component } from 'react';
import NavbarUser from '../components/navbarUser';
import Footerr from '../components/footer';
import UserHomeBody from '../components/userHomeBody';

export class UserHomePage extends Component {

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
                <body>
                    <UserHomeBody/>
                </body>
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
export default UserHomePage;