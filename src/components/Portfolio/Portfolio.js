import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import Heroku from "../../assets/heroku.png";
import "../Portfolio/Portfolio.css";
const Portfolio = () => {
    return (
        <MDBContainer fluid className="background">
            {/* First Container */}
  
            <MDBRow className="text-center d-flex justify-content-center">
          
                <MDBCol md='2' className="card1">
                    <MDBRow>
                        <MDBCol>
                            <h3 className="">Dine-In or Dine-Out</h3>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <i class="fab fa-js-square fa-3x" ></i>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <a><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>

                        </MDBCol>
                        <MDBCol>
                            <a><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
               <MDBCol md="2" className="card1">

               </MDBCol>
               <MDBCol md='2' className="card1" ></MDBCol>
            </MDBRow>

            <MDBRow className="text-center offset-3">
                <MDBCol md='3' className="card1">
                    <MDBRow>
                        <MDBCol>
                            <h3 className="">Dine-In or Dine-Out</h3>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <i class="fab fa-js-square fa-3x" ></i>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <a><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>

                        </MDBCol>
                        <MDBCol>
                            <a><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
               <MDBCol md="3" className="card1">

               </MDBCol>

            </MDBRow>
        </MDBContainer>
    )
}

export default Portfolio;