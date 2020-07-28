import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import PokemonPic from "../../../assets/Pokemon325x200.png";



class ModalPokemon extends Component {


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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">Pokemon-React</MDBModalHeader>
            <MDBModalBody>
              <h5>Frameworks/Libraries/Concepts</h5>
              <p>React | Node/Express | JavaScript | props | state | Bootstrap</p>
              <h5>NPM Dependencies</h5>
              <p>React | React-DOM | React-Bootstrap</p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>Introduction to </p>
              <p>This React-Bootstrap App displays Pokemon data that is stored locally in a json file. The App allows the user to Sort Pokeman alphabetically or reverse by clicking the "Names" button. It also has a drop down button filter for the "Type" column.</p>
              <p></p>
              <img src={PokemonPic}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalPokemon;