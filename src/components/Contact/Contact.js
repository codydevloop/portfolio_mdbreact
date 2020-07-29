import React from 'react';
import { MDBIcon, MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../Contact/Contact.css";

import FooterPage from "../Footer/Footer";


const Contact = () => {
    return (
        <>


            <MDBContainer fluid className='background'>
                <MDBRow className="" >
                    <MDBCol className="d-none d-md-block"></MDBCol>
                    <MDBCol className="">
                        <MDBRow className="phoneInfo">
                            <MDBIcon icon="phone-alt" />
                        </MDBRow>
                        <MDBRow className="phoneInfo">
                            <h3>480.823.6208</h3>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className="" >
                        <MDBRow className="phoneInfo">
                            <MDBIcon far icon="envelope" />
                        </MDBRow>
                        <MDBRow className="phoneInfo">
                            <h3>codydevloop@gmail.com</h3>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className="d-none d-md-block"></MDBCol>
                </MDBRow>
            </MDBContainer>
            <FooterPage ></FooterPage>
        </>

    )
}

export default Contact;