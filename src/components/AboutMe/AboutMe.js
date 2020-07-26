import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../AboutMe/AboutMe.css";
import Cody from "../../assets/CodyPortfolio.png";
const AboutMe = () => {
    return (
        <>
            <MDBContainer fluid  >
                <MDBRow className=" background mt-5 pt-5 m">
                    <MDBCol xl="8" className="">
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
                        {/* <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.bootcampMERN</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Completion Date 8/21/20`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow> */}
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.frontEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`React, JavaScript, Material`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.backEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Node/Express, MongoDB, SQL`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.apiDesign</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Create, Read, Update, Delete`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.teamIpsum?</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Bacon Ipsum`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.devTools</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`VS Code, Chrome DevTools, GitHub</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.devToolsSoMany</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Google-Fu, Heroku, NPM, AWS`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.educationStyle</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Best in groups and with visuals`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.lifeGoal#7</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Spend summers coding in MT`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="md" className="offset-0">
                                <div className="d-flex flex-row">
                                    <h4 className="ti2"><span className="purpleCurly"> {"}"}</span></h4>
                                    <h4 className="curlyClass"> {"}"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" className="">
                        <MDBRow>
                            <MDBCol></MDBCol>
                            <MDBCol  md="9">
                            <div className="mt-5">
                                <img src={Cody} className={"img-thumbnail"} alt="thumbnail" />
                            </div>
                            </MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    )
}

export default AboutMe;