import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import MoviedDBPic from "../../../assets/moviedb325x200.png";
import "../ModalMovie/ModalMovie.css";



class ModalMovie extends Component {


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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">The MovieDB</MDBModalHeader>
            <MDBModalBody >
              <h5>Frameworks/Libraries/Concepts</h5>
              <p>MySQL | Node/Express | JavaScript | MVC | DB Modal | MVC | API routes</p>
              <h5>NPM Dependencies</h5>
              <p> mysql2/sequelize | passport/passport-jwt | bcrypt | handlebars | axios  </p>

            </MDBModalBody>
            <MDBModalFooter center>
              <p>This full stack app is hosted on Heroku with mLab JawsDB.</p>
              <h5>Functionality</h5>
              <p>The Movie DB is a movie recommendation website that let's helps 
                  you create a list of movie titles, each identified by Likes, 
                  Dislikes, and Watch List. "Thumbs Up" represent movies that 
                  you wish to influence the outcome of future searches so 
                  that your results are tailored more to your interests. 
                  "Thumbs Down" represent movies that you wish not 
                  be returned in future searches or influence future searches.</p>
              <p>The results page lists all the movies you have interacted with and tells you if you liked it, disliked it, or added it to your watch list.</p>
              <img src={MoviedDBPic}></img>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default ModalMovie;