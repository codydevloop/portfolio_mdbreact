import React from "react";
import Nav from "../Nav/Nav";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../Home/Home.css";
import AboutMe from "../AboutMe/AboutMe";


const Home = () => {
    return (
        <>
            <Nav />
            {/* <MDBContainer></MDBContainer> */}
            <AboutMe />
            

        </>
    )
};

export default Home;