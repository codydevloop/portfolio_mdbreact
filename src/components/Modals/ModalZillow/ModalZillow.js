import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import PokemonPic from "../../../assets/Pokemon325x200.png";

import Wash from "../../../assets/WashburnSearch.png"

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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">Zillow Clone</MDBModalHeader>
            <MDBModalBody>
              <h5>Frameworks/Libraries/Concepts</h5>
              <p>React | Node/Express | JavaScript | MongoDB | Leaflet | Auth0</p>
              <h5>NPM Dependencies</h5>
              <p>  mdbreact | mongoose</p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>This idea here is to build a Zillow clone.  Have user login functionality.  The ability to save favorites.  And an admin section for the realator to view user favorites.</p>
              <p></p>
              <img src={Wash}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalZillow;