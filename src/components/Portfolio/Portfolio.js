import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import ReadMeModal from "../ReadMeModal/ReadMeModal";
import JumboTronPortfolio from "../JumboTronPortfolio/JumboTronPortfolio";

import "../Portfolio/Portfolio.css";

const Portfolio = () => {
    return (
        <>
        <JumboTronPortfolio></JumboTronPortfolio>
        <MDBContainer fluid className="background">
            {/* First Container */}
  
            <MDBRow className="text-center d-flex justify-content-center">
          
                <MDBCol md='2' className="card1">
                    <MDBRow >
                        <MDBCol className="mt-2">
                            <h3 className="titleFont">Dine-In or Dine-Out</h3>
                            <hr></hr>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="mt-3">
                            {/* #### MODAL #### */}
                            <ReadMeModal />
                            <p  className="cardFont">README</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                           <a href="https://github.com/codydevloop/DineInDineOut-Group-Project" target ="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                           <p className="cardFont">REPO</p>
                        </MDBCol>
                        <MDBCol>
                            <a href="https://codydevloop.github.io/DineInDineOut-Group-Project/" target ="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                            <p className="cardFont">DEPLOYED</p>
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
                            <h3 className="titleFont">Dine-In or Dine-Out</h3>
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
        </>
    )
}

export default Portfolio;