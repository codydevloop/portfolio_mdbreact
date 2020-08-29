import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "../JumboTronPortfolio/JumboTronPortfolio.css";
const JumbotronPage = () => {
    return (
        <MDBContainer fluid className="background" id="PortfolioScrollTag">
            <MDBRow >
                <MDBCol className="my-5">
                    <hr className="hrWidth"></hr>
                    <div className="d-flex justify-content-center">
                        <MDBIcon icon="cog" spin size="3x" fixed />
                        <span className="sr-only">Loading...</span>
                        <h1 className="portfolio">PORTFOLIO</h1>
                        <MDBIcon icon="cog" spin size="3x" fixed />
                        <span className="sr-only">Loading...</span>
                    </div>
                   
                    <hr className="hrWidth"></hr>
                    <h6 className="subText">(tears - sweat - agony - triumph) repeat</h6>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;