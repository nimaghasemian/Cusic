import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/style-customizer.css';
import './css/typography.css';
import './css/variable.css';
import image01 from './images/user/1.jpg';
import image02 from './images/user/06.jpg';
import image03 from './images/user/07.jpg';
import image04 from './images/user/08.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";



class UserHomeBody extends React.Component {
  
    render(){
       return (
        <div id="content-page" class="content-page">
            <div class="container-fluid">
               <div class="row profile-content">
                  <div class="col-12 col-md-12 col-lg-4">
                     <div class="iq-card">
                        <div class="iq-card-body profile-page">
                           <div class="profile-header">
                              <div class="cover-container text-center">
                                 <img src={image01} alt="profile-bg" class="rounded-circle img-fluid"></img>
                                 <div class="profile-detail mt-3">
                                    <h3>Barry Tech</h3>
                                    <p class="text-primary">Web designer</p>
                                    <p>Phasellus faucibus mollis pharetra. Proin blandit ac massa.Morbi nulla dolor, ornare at commodo non, feugiat non nisi.</p>
                                 </div>
                                 <div class="iq-social d-inline-block align-items-center">
                                    <ul class="list-inline d-flex p-0 mb-0 align-items-center">
                                       <li>
                                          <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                                       </li>
                                       <li>
                                          <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                       </li>
                                       <li>
                                          <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                                       </li>
                                       <li>
                                          <a href="#" class="avatar-40 rounded-circle bg-primary pinterest"><FontAwesomeIcon icon={faInstagram} /></a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="iq-card">
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
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                           <div class="iq-header-title">
                              <h4 class="card-title mb-0">Skill Progress</h4>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="list-inline p-0 mb-0">
                              <li>
                                 <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Biography</h6>
                                    <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                       <div class="iq-progress-bar iq-bg-primary">
                                          <span class="bg-primary" data-percent="70" style={{transition: "width 2s ease 0s",width: "70%"}}></span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Horror</h6>
                                    <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                       <div class="iq-progress-bar iq-bg-danger">
                                          <span class="bg-danger" data-percent="50" style={{transition: "width 2s ease 0s",width: "50%"}}></span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h6>Comic Book</h6>
                                    <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                       <div class="iq-progress-bar iq-bg-info">
                                          <span class="bg-info" data-percent="65" style={{transition: "width 2s ease 0s",width: "65%"}}></span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div class="d-flex align-items-center justify-content-between">
                                    <h6>Adventure</h6>
                                    <div class="iq-progress-bar-linear d-inline-block mt-1 w-50">
                                       <div class="iq-progress-bar iq-bg-success">
                                          <span class="bg-success" data-percent="85" style={{transition: "width 2s ease 0s",width: "80%"}}></span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-8">
                     <div class="row">
                        <div class="col-md-6">
                           <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                              <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                                 <div class="iq-header-title">
                                    <h4 class="card-title mb-0">Latest Uploads</h4>
                                 </div>
                              </div>
                              <div class="iq-card-body">
                                 <ul class="list-inline p-0 mb-0">
                                    <li class="d-flex mb-4 align-items-center">
                                       <div class="profile-icon bg-secondary"><span><FontAwesomeIcon icon={faImage} /></span></div>
                                       <div class="media-support-info ml-3">
                                          <h6>Documentation</h6>
                                          <p class="mb-0">48kb</p>
                                       </div>
                                       <div class="iq-card-toolbar ml-auto">
                                          <div class="dropdown">
                                             <span class="font-size-24" id="dropdownMenuButton01" data-toggle="dropdown" aria-expanded="false">
                                             <i class="ri-more-line"></i>
                                             </span>
                                          </div>
                                       </div>
                                    </li>
                                    <li class="d-flex mb-4 align-items-center">
                                       <div class="profile-icon bg-secondary"><span><FontAwesomeIcon icon={faImage} /></span></div>
                                       <div class="media-support-info ml-3">
                                          <h6>Images</h6>
                                          <p class="mb-0">204kb</p>
                                       </div>
                                       <div class="iq-card-toolbar ml-auto">
                                          <div class="dropdown">
                                             <span class="font-size-24" id="dropdownMenuButton02" data-toggle="dropdown" aria-expanded="false">
                                             <i class="ri-more-line"></i>
                                             </span>
                                             
                                          </div>
                                       </div>
                                    </li>
                                    <li class="d-flex mb-4 align-items-center">
                                       <div class="profile-icon bg-secondary"><span><FontAwesomeIcon icon={faVideo} /></span></div>
                                       <div class="media-support-info ml-3">
                                          <h6>Videos</h6>
                                          <p class="mb-0">509kb</p>
                                       </div>
                                       <div class="iq-card-toolbar ml-auto">
                                          <div class="dropdown">
                                             <span class="font-size-24" id="dropdownMenuButton03" data-toggle="dropdown" aria-expanded="false">
                                             <i class="ri-more-line"></i>
                                             </span>
                                             
                                          </div>
                                       </div>
                                    </li>
                                    <li class="d-flex mb-4 align-items-center">
                                       <div class="profile-icon bg-secondary"><span><FontAwesomeIcon icon={faPodcast} /></span></div>
                                       <div class="media-support-info ml-3">
                                          <h6>Resources</h6>
                                          <p class="mb-0">48kb</p>
                                       </div>
                                       <div class="iq-card-toolbar ml-auto">
                                          <div class="dropdown">
                                             <span class="font-size-24" id="dropdownMenuButton04" data-toggle="dropdown" aria-expanded="false">
                                             <i class="ri-more-line"></i>
                                             </span>
                                             
                                          </div>
                                       </div>
                                    </li>
                                    <li class="d-flex align-items-center">
                                       <div class="profile-icon bg-secondary"><span><FontAwesomeIcon icon={faPaperclip} /></span></div>
                                       <div class="media-support-info ml-3">
                                          <h6>Celine Dion</h6>
                                          <p class="mb-0">204kb</p>
                                       </div>
                                       <div class="iq-card-toolbar ml-auto">
                                          <div class="dropdown">
                                             <span class="font-size-24" id="dropdownMenuButton05" data-toggle="dropdown" aria-expanded="false">
                                             <i class="ri-more-line"></i>
                                             </span>
                                             
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                              <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                                 <div class="iq-header-title">
                                    <h4 class="card-title mb-0">Top Books</h4>
                                 </div>
                              </div>
                              <div class="iq-card-body">
                                 <ul class="list-inline p-0 mb-0">
                                    <li>
                                       <div class="iq-details mb-2">
                                          <span class="title">Adventure</span>
                                          <div class="percentage float-right text-primary">95 <span>%</span></div>
                                          <div class="iq-progress-bar-linear d-inline-block w-100">
                                             <div class="iq-progress-bar">
                                                <span class="bg-primary" data-percent="95" style={{transition: "width 2s ease 0s",width: "95%"}}></span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="iq-details mb-2">
                                          <span class="title">Horror</span>
                                          <div class="percentage float-right text-warning">72 <span>%</span></div>
                                          <div class="iq-progress-bar-linear d-inline-block w-100">
                                             <div class="iq-progress-bar">
                                                <span class="bg-warning" data-percent="72" style={{transition: "width 2s ease 0s",width: "72%"}}></span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="iq-details mb-2">
                                          <span class="title">Comic Book</span>
                                          <div class="percentage float-right text-info">75 <span>%</span></div>
                                          <div class="iq-progress-bar-linear d-inline-block w-100">
                                             <div class="iq-progress-bar">
                                                <span class="bg-info" data-percent="75" style={{transition: "width 2s ease 0s",width: "75%"}}></span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="iq-details mb-2">
                                          <span class="title">Biography</span>
                                          <div class="percentage float-right text-danger">70 <span>%</span></div>
                                          <div class="iq-progress-bar-linear d-inline-block w-100">
                                             <div class="iq-progress-bar">
                                                <span class="bg-danger" data-percent="70" style={{transition: "width 2s ease 0s",width: "70%"}}></span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="iq-details">
                                          <span class="title">Mystery</span>
                                          <div class="percentage float-right text-success">80 <span>%</span></div>
                                          <div class="iq-progress-bar-linear d-inline-block w-100">
                                             <div class="iq-progress-bar">
                                                <span class="bg-success" data-percent="80" style={{transition: "width 2s ease 0s",width: "80%"}}></span>
                                             </div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                           <div class="iq-header-title">
                              <h4 class="card-title mb-0">Daily Sales</h4>
                           </div>
                           <div class="iq-card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <span class="dropdown-toggle text-primary" id="dropdownMenuButton05" data-toggle="dropdown">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="perfomer-lists m-0 p-0">
                              <li class="d-flex mb-4 align-items-center">
                                 <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src={image02} alt=""></img></div>
                                 <div class="media-support-info ml-3">
                                    <h5>Reading on the World</h5>
                                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                                 </div>
                                 <div class="iq-card-header-toolbar d-flex align-items-center ml-auto">
                                    <span class="text-dark"><b>+$82</b></span>
                                 </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center">
                                 <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src={image03} alt=""></img></div>
                                 <div class="media-support-info ml-3">
                                    <h5>Little Black Book</h5>
                                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                                 </div>
                                 <div class="iq-card-header-toolbar d-flex align-items-center ml-auto">
                                    <span class="text-dark"><b>+$90</b></span>
                                 </div>
                              </li>
                              <li class="d-flex mb-4 align-items-center">
                                 <div class="user-img img-fluid"><img class="img-fluid avatar-50 rounded-circle" src={image04} alt=""></img></div>
                                 <div class="media-support-info ml-3">
                                    <h5>See the More Story</h5>
                                    <p class="mb-0">Lorem Ipsum is simply dummy test</p>
                                 </div>
                                 <div class="iq-card-header-toolbar d-flex align-items-cener ml-auto">
                                    <span class="text-dark"><b>+$85</b></span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between align-items-center mb-0">
                           <div class="iq-header-title">
                              <h4 class="card-title mb-0">Top Products</h4>
                           </div>
                           <div class="iq-card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <span class="dropdown-toggle text-primary" id="dropdownMenuButton05" data-toggle="dropdown">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                    <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="iq-card-body">
                           <ul class="perfomer-lists m-0 p-0">
                              <li class="row mb-3 align-items-center justify-content-between">
                                 <div class="col-md-8">
                                    <h5>Find The Wave Book</h5>
                                    <p class="mb-0">General Book</p>
                                 </div>
                                 <div class="col-md-4 text-right">
                                    <div class="iq-card-header-toolbar d-flex align-items-center">
                                       <span class="text-primary mr-3"><b>+$92</b></span>
                                       <div class="iq-progress-bar-linear d-inline-block mt-1 w-100">
                                          <div class="iq-progress-bar iq-bg-primary">
                                             <span class="bg-primary" data-percent="92" style={{transition: "width 2s ease 0s",width: "92%"}}></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li class="row mb-3 align-items-center justify-content-between">
                                 <div class="col-md-8">
                                    <h5>A man with those Faces</h5>
                                    <p class="mb-0">Biography Book</p>
                                 </div>
                                 <div class="col-md-4 text-right">
                                    <div class="iq-card-header-toolbar d-flex align-items-center">
                                       <span class="text-danger mr-3"><b>+$85</b></span>
                                       <div class="iq-progress-bar-linear d-inline-block mt-1 w-100">
                                          <div class="iq-progress-bar iq-bg-danger">
                                             <span class="bg-danger" data-percent="85" style={{transition: "width 2s ease 0s",width: "85%"}}></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        );
    }
}
export default UserHomeBody;