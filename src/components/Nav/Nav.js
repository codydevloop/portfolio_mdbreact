import React from "react"
import "./Nav.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Nav= () => {
    return (
    <>
                <MDBContainer fluid className="container">
                <MDBRow>
                    <MDBCol>
                        <h2>Cody Hoover</h2>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow>
                            <MDBCol>Portfolio</MDBCol>
                            <MDBCol>About</MDBCol>
                            <MDBCol>Contact</MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
       
    </>

    )
};

export default Nav;