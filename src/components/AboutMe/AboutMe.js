import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../AboutMe/AboutMe.css";
import Cody from "../../assets/CodyPortfolio.png";
const AboutMe = () => {
    return (
        <MDBContainer fluid className="test mt-5 pt-5">
            <MDBRow>
                <MDBCol size="10">
                    <MDBRow>
                    <MDBCol size="4">
                    <img src={Cody} className={"img-fluid"} alt="" />

                    </MDBCol>
                    <MDBCol size="8">
                    <p>test</p>
                    </MDBCol>
                    </MDBRow>

                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default AboutMe;