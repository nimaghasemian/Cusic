import React from 'react';
import { Component } from 'react';
import NavbarUser from '../components/navbarUser';
import Footerr from '../components/footer';
import NavbarArtist from '../components/navbarArtist';
import LandingHeader from '../components/landingheader';

export class Landing extends Component {

    state = {
       
    }

    render() {
        return(
            <div className='background_wall'>
                <header>
                    {/* <LandingHeader/> */}
                    <NavbarArtist/>
                </header> 
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="rowB-sec">
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                     <div class="iq-card-body">
                        <div class="d-flex align-items-center justify-content-between-sec">
                           <h6>blalala</h6>
                           <span class="iq-icon"><i class="ri-information-fill"></i></span>
                        </div>
                        <div class="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                           <div class="iq-map text-primary font-size-32"><i class="ri-bar-chart-grouped-line"></i></div>
                           <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary submit px-3">Getting start</button>
                    </div>
                        </div>
                     </div>
                  </div>
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
export default Landing;