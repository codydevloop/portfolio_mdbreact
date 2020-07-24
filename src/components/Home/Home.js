// import React from "react";
import Nav from "../Nav/Nav";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../Home/Home.css";
import AboutMe from "../AboutMe/AboutMe";


import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Home = () => {
    return (
        <>
        <MDBContainer>
            <MDBRow>
                <MDBCol size="4">.col-4</MDBCol>
                <MDBCol size="4">.col-4</MDBCol>
                <MDBCol size="4">.col-4</MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol sm="4">.col-sm-4</MDBCol>
                <MDBCol sm="4">.col-sm-4</MDBCol>
                <MDBCol sm="4">.col-sm-4</MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="4">.col-md-4</MDBCol>
                <MDBCol md="4">.col-md-4</MDBCol>
                <MDBCol md="4">.col-md-4</MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol lg="4">.col-lg-4</MDBCol>
                <MDBCol lg="4">.col-lg-4</MDBCol>
                <MDBCol lg="4">.col-lg-4</MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol xl="4">.col-xl-4</MDBCol>
                <MDBCol xl="4">.col-xl-4</MDBCol>
                <MDBCol xl="4">.col-xl-4</MDBCol>
            </MDBRow>

        </MDBContainer>

        <MDBContainer>
            <Fragment>
                <MDBBtn color="primary">Primary</MDBBtn>
                <MDBBtn>Default</MDBBtn>
                <MDBBtn color="secondary">Secondary</MDBBtn>
                <MDBBtn color="success">Success</MDBBtn>
                <MDBBtn color="info">Info</MDBBtn>
                <MDBBtn color="warning">Warning</MDBBtn>
                <MDBBtn color="danger">Danger</MDBBtn>
            </Fragment>
        </MDBContainer>
        </>





            

      
    )
};

export default Home;