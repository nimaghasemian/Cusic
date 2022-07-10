import React, { Component } from "react";
import NavbarArtist from "./navbarArtist";
import Footer from "./footer";
class Uploader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="background_wall">
          {/* <header>
            <NavbarArtist />
          </header> */}
          <div className="file-upload">
            <button
              className="file-upload-btn"
              type="button"
              onClick="$('.file-upload-input').trigger( 'click' )"
            >
              Import your Music{" "}
            </button>

            <div className="music-upload-wrap">
              <input
                className="file-upload-input"
                type="file"
                onchange="readURL(this);"
                accept="music/*"
              />
              <div className="drag-text">
                <h3>
                  <small>Drop Your Music or choose your file</small>
                </h3>
              </div>
            </div>
            <div className="file-upload-content">
              <img className="file-upload-music" src="#" alt="your music" />
              <div className="music-title-wrap">
                <button
                  type="button"
                  onClick="removeUpload()"
                  className="remove-image"
                >
                  Remove <span className="music-title">Uploaded</span>
                </button>
              </div>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Uploader;
