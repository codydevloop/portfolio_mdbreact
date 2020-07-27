import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
const JumbotronCody = () => {
    return (
        <MDBContainer fluid className="background background mt-5 pt-5 m">
            <MDBRow >
                <MDBCol className="my-5">
                    {/* <hr className="hrWidth"></hr> */}
                    <h1 className="portfolio">CODY HOOVER</h1>
                    <hr className="hrWidth"></hr>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronCody;