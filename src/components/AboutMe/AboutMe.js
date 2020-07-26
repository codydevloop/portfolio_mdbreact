import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../AboutMe/AboutMe.css";
import Cody from "../../assets/CodyPortfolio.png";
const AboutMe = () => {
    return (
        <>
            <MDBContainer fluid>
                <MDBRow className=" test mt-5 pt-5">
                    <MDBCol md="8" className="">
                        <MDBRow>
                            <MDBCol md="12" className="offset-0">
                                <div className="d-flex flex-row">
                                    <h4 className="popularTeal mr-2">class</h4>
                                    <h4 className="popularGreen mr-2">CodyHoover</h4>
                                    <h4 className="curlyClass"> {"{"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12" className="offset-1">
                                <div className="d-flex flex-row">
                                    <h4 className="functionBrackets mr-2">constructor</h4>
                                    <h4 className="purpleBrackets mr-2"> ()</h4>
                                    <h4 className="curlyClass"> {"{"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.bootcampMERN</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Completion Date 8/21/20`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.frontEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`React, JavaScript, Material`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.backEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Node/Express, MongoDB, SQL`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.apiDesign</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol lg="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Create, Read, Update, Delete`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol></MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol></MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>



                    </MDBCol>
                    <MDBCol md="" className="">
                        <div className="">
                            <div className="">
                                <img src={Cody} className={"img-fluid"} alt="head shot of Cody Hoover" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    )
}

export default AboutMe;