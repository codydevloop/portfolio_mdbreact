import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../AboutMe/AboutMe.css";
import Cody from "../../assets/CodyPortfolio.png";

const AboutMe = () => {
    return (
        <>
            <MDBContainer fluid className="background">
                <MDBRow className="">
                    {/* ---> MAKE IT ALL FIT IN 8 COL WIDTH -- CHECK AGAIN */}
                    <MDBCol size="8" className="">
                        <MDBRow>
                            {/* ---> MAKE IT ALL FIT IN 12 COL WIDTH */}
                            <MDBCol md="12" className="offset-1 mt-3">
                                <div className="d-flex flex-row">
                                    <h4 className="popularTeal mr-2">class</h4>
                                    <h4 className="popularGreen mr-2">CodyHoover</h4>
                                    <h4 className="curlyClass"> {"{"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                             {/* ---> MAKE IT ALL FIT IN 12 COL WIDTH */}
                            <MDBCol md="12" className="offset-2">
                                <div className="d-flex flex-row">
                                    <h4 className="functionBrackets mr-2">constructor</h4>
                                    <h4 className="purpleBrackets mr-2"> ()</h4>
                                    <h4 className="purpleCurly"> {"{"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.security</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.security</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Auth0, Passport`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            {/* CREATING TWO ELEMENTS TO HIDE/SHOW FOR 'this.xxxx' DIVS ONLY.
                            SEE OPTION #1 AND #2 BELOW.  THIS REPEATS FOR THE REST OF THE ROWS
                            EXCEPT THE VERY LAST ONE */}

                            {/* OPTION #1  */}
                            <MDBCol md="6" className="d-none d-md-block">
                              <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.frontEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                             </div>
                            </MDBCol>
                            {/* OPTION #2  */}
                            <MDBCol md="6" className="d-md-none">
                              <div className="d-flex flex-row">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.frontEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                             </div>
                            </MDBCol>

                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`React, JavaScript, Bootstrap`</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.backEnd</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
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
                            <MDBCol  md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.apiDesign</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol  md="6" className="d-md-none">
                                <div className="d-flex flex-row">
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
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.teamIpsum?</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
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
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.cloud</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.cloud</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="objpropVal">`Heroku, AWS, Terraform'</h4>
                                    <h4 className="equalsWhite">;</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                       
                        <MDBRow>
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.educationStyle</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
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
                            <MDBCol md="6" className="d-none d-md-block">
                                <div className="d-flex flex-row justify-content-end">
                                    <h4 className="popularTeal">this</h4>
                                    <h4 className="objpropKey">.lifeGoal#7</h4>
                                    <h4 className="equalsWhite equalsTab">=</h4>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="d-md-none">
                                <div className="d-flex flex-row">
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
                            <MDBCol md="12" className="offset-2">
                                <div className="d-flex flex-row">
                                    <h4 className="ti2"><span className="purpleCurly"> {"}"}</span></h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="md" className="offset-1">
                                <div className="d-flex flex-row">
                                    <h4 className="curlyClass"> {"}"}</h4>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol lg="4" className="d-flex flex-row justify-content-center">
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