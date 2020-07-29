import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "../JumboTronPortfolio/JumboTronPortfolio.css";
const JumbotronPage = () => {
    return (
        <MDBContainer fluid className="background">
            <MDBRow >
                <MDBCol className="my-5">
                    <hr className="hrWidth"></hr>
                    <h1 className="portfolio">PORTFOLIO</h1>
                    <hr className="hrWidth"></hr>
                    <h6>this.portfolio = 'built with React'</h6>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;