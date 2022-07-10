import React, { Component } from "react";
import NavbarUser from "./navbarUser";
import Footer from "./footer";
class ProfileBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="user-profile">
          <img
            class="avatar"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s"
            alt="Ash"
          />
          <div class="username">Nimic</div>
          <div class="fullname">Nima Ghasemian</div>
          <div class="bio">Burn the bridge light the way</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileBox;
