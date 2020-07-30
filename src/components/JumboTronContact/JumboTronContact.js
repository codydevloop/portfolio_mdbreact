import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "../JumboTronContact/JumboTronContact.css";
const JumbotronContact = () => {
    return (
        <MDBContainer fluid className="background" id="ContactScrollTag">
            <MDBRow >
                <MDBCol className="my-5">
                    <hr className="hrWidth"></hr>
                    <h1 className="portfolio">CONTACT</h1>
                    <hr className="hrWidth"></hr>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronContact;