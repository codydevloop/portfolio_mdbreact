import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import "../Modals/ModalDineIn.css";
import dine from "../../assets/Project1_325x200.png";


class ModalDineIn extends Component {


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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">Dine-In or Dine-Out</MDBModalHeader>
            <MDBModalBody>
              <h5>Frameworks/Libraries</h5>
              <p>CSS | UIKit | jQuery | .ajax | moment.js | AOS</p>
              <h5>Server-side API</h5>
              <p>Zomato | Edamam | Open Weather</p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>I want an application that will search and display a list of recipes based on a search term that I provide.</p>
              <p>As a user who also enjoys dining out, the application should also return a list of local restaurants that relate to my recipe search term. I, the user, will provide a zip code to determine locality.</p>
              <img src={dine}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalDineIn;