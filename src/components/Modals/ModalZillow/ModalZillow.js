import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import npmFE from "../../../assets/frontend.PNG";
import npmBE from "../../../assets/backend.PNG";
import mainPage from "../../../assets/washmain.png";
import adminPage from "../../../assets/washadmin.png";
import loginPage from "../../../assets/washlogin.png";

class ModalZillow extends Component {


  state = {
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    const style = { display: "inline-block", maxWidth: "50vh" };
    return (
      <>
        <MDBContainer>
          {/* <MDBBtn color="primary" onClick={this.toggle(14)}>MDBModal</MDBBtn> */}

          <i class="fab fa-readme fa-3x" onClick={this.toggle(14)}></i>

          <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">Washburn Real Estate - Zillow Clone</MDBModalHeader>
            <MDBModalBody>

            <h5>Description</h5>
              <ul>
                <p>This app was created with focus on the MERN technology stack, and Auth0 authentication.</p>
                <p>It is designed to be used by independent real estate agents.</p>
                <p>The app provides the primary functions of Zillow.com using the RealatorAPI. (Login, Search, Favorites, Map)</p>
                <p>The app creates value to the agent by providing user search habits (graphs and charts) and other metadata to asist the agent's marketing efforts. (ADMIN on navbar)</p>
              </ul>
              {/* <h5>Frameworks/Libraries/Concepts</h5>
              <p>React | Node/Express | JavaScript | MongoDB | Leaflet | Auth0</p> */}
              <h5>NPM Dependencies</h5>
              <div className="">
              <h3>Front End</h3>
              <img src={npmFE}></img>
              <h3>Back End</h3>
              <img src={npmBE}></img>
              </div>
              <br></br>
              <h5>Usage</h5>
              <p>marking a property as favorite will initiate an API call. After a 1-3 second delay, (and component state change) a camera icon will display and link to a modal containing a carousel of the photo gallery, and any property description details.</p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Screenshots</h5>
              <p>***Main Page (after fav click .. then camera icon click)***</p>
              <img src={mainPage}></img>
              
              <p>***Admin Page (extra features..yay!)***</p>
              <img src={adminPage}></img>
             
              <p>***Landing page (redirects to Auth0)***</p>
              <img src={loginPage}></img>
              
              
              
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

      </>
    );
  }
}

export default ModalZillow;