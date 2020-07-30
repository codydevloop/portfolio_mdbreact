import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "../JumboTronPortfolio/JumboTronPortfolio.css";
const JumbotronPage = () => {
    return (
        <MDBContainer fluid className="background" id="PortfolioScrollTag">
            <MDBRow >
                <MDBCol className="my-5">
                    <hr className="hrWidth"></hr>
                    <h1 className="portfolio">PORTFOLIO</h1>
                    <hr className="hrWidth"></hr>
                    <h6 className="subText">(tears - sweat - agony - triumph) repeat</h6>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;