import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import WorkoutTrackerPic from "../../../assets/workout325x200.png";



class ModalWorkoutTracker extends Component {


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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">Workout-Tracker</MDBModalHeader>
            <MDBModalBody>
              <h5>Frameworks/Libraries/Concepts</h5>
              <p>MongoDB | Node/Express | JavaScript | CSS/HTML | CRUD API Routes | MVC </p>
              <h5>NPM Dependencies</h5>
              <p>express | mongoose </p>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>This full stack app is deployed on Heroku and utilizes mLab MongoDB. The project focused on building API routes and constructing the mongoose ODM schema.</p>
              <p>The application can accept user input for either Cardio or Resistance.  You are able to add multiple workouts a day.  The dashboard page displays nice graphs of the weeks aggregates</p>
              <img src={WorkoutTrackerPic}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalWorkoutTracker;