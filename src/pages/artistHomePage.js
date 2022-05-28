import React from 'react';
import { Component } from 'react';
import Footerr from '../components/footer';
import NavbarArtist from '../components/navbarArtist';
import ArtistProfile from './artistProfile';
import ArtistDashboard from '../components/artistDashboard';
export class ArtistHomePage extends Component {

    state = {
       
    }

    render() {
        return(
            <div className='background_wall'>
                <header>
                    <NavbarArtist/>
                </header> 
                <br/>
                <br/>
                <br/>
                <br/>
                {/* <body> */}
                    {/* <ArtistProfile/> */}
                    <ArtistDashboard/>
                {/* </body> */}
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
export default ArtistHomePage;