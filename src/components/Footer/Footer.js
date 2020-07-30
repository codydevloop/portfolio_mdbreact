import React from "react";
import { MDBCol, MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../Footer/Footer.css";
import Resume from "../../assets/CHLHHResPE.pdf";


const FooterPage = () => {
    return (
        <div className="backgroundFooter">
            <MDBRow className="">
                <MDBCol className="centerContent">
                    <a href="https://www.linkedin.com/in/codydevloop" target="_blank"><MDBIcon className="icons" fab icon="linkedin-in"></MDBIcon></a>
                    <a href={Resume} target="_blank"><MDBIcon far icon="file-pdf" MDBIcon className="icons"/></a>
                    <a href="https://github.com/codydevloop" target="_blank"><MDBIcon className="icons" fab icon="github" /></a>
                </MDBCol>

            </MDBRow>
        </div>

    );
}

export default FooterPage;