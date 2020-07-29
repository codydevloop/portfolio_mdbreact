import React from "react";
import { MDBCol, MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../Footer/Footer.css";

const FooterPage = () => {
    return (
        <div className="backgroundFooter">
            <MDBRow className="">
                <MDBCol className="centerContent">
                    <MDBIcon className="icons" fab icon="linkedin-in" />
                    <MDBIcon className="icons" far icon="file-pdf" />
                    <MDBIcon className="icons" fab icon="github" />
                </MDBCol>

            </MDBRow>
        </div>

    );
}

export default FooterPage;