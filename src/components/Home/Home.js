// import React from "react";
import Nav from "../Nav/Nav";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../Home/Home.css";
import AboutMe from "../AboutMe/AboutMe";


import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import JumbotronCody from "../JumboTronCody/JumboTronCody";

const Home = () => {
    return (
        <>
            <Nav />
            <JumbotronCody />
            <AboutMe />
        </>





            

      
    )
};

export default Home;