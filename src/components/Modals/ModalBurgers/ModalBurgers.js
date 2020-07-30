import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Burger from "../../../assets/Burger325x250.png";



class ModalBurger extends Component {


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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">EAT-DA-BURGER</MDBModalHeader>
            <MDBModalBody>
              <h5>Frameworks/Libraries/Concepts</h5>
              <p>Node | JavaScript | jQuery | async/await</p>
              <h5>NPM Dependencies</h5>
              <p>express.js | express-handlebars | mysql </p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>This full stack application is deployed on Heroku with JawsDB.  The project focus was understanding and working with the MVC model.</p>
              <p>The application is a Burger logger.  It allows you to add new burgers to the list and eventually eat them.  Each action makes requests to the DB and updates to the display.</p>
              <p>**WARNING - app loads slow due to Heroku and the 'Huge' background file I used</p>
              <img src={Burger}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalBurger;