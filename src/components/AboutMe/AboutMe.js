import React from 'react';
import { MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import "../AboutMe/AboutMe.css";
import Cody from "../../assets/CodyPortfolio.png";
const AboutMe = () => {
    return (
        <>
            <MDBContainer fluid>
                <MDBRow className=" test mt-5 pt-5">
                    <MDBCol md="4" className="">
                        <div className="d-flex flex-row">
                            <h4 className="popularTeal">class</h4>
                            <h4 className="popularGreen">CodyHoover</h4>
                            <h4 className="curlyClass"> {"{"}</h4>
                        </div>
                        <div className="d-flex flex-row">
                            <h4 className="functionBrackets ti">constructor</h4>
                            <h4 className="purpleBrackets"> ()</h4>
                            <h4 className="purpleCurly"> {"{"}</h4>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                            <h4 className="popularTeal">this</h4>
                            <h4 className="objpropKey mr-4">.bootcampMERN</h4>
                            <h4 className="equalsWhite"> =</h4>
                        </div>
                    </MDBCol>
                    <MDBCol md="4" className="">
                        <div className="d-flex flex-row justify-content-start">
                            <h4 className="objpropVal ">`Completion Date 8/21/20`</h4>
                            <h4 className="equalsWhite">;</h4>
                        </div>
                        <div className="d-flex flex-row">
                            <h4 className="objpropVal">`Completion Date 8/21/20`</h4>
                            <h4 className="equalsWhite">;</h4>
                        </div>
                        <div className="d-flex flex-row">
                            <h4 className="objpropVal">`Completion Date 8/21/20`</h4>
                            <h4 className="equalsWhite">;</h4>
                        </div>
                        <div>
                            <h4></h4>
                        </div>


                        
                    </MDBCol>
                        <MDBCol md="4" className="">
                            <div className="">
                                <div className="">
                                    <img src={Cody} className={"img-fluid"} alt="head shot of Cody Hoover" />
                                </div>
                            </div>
                        </MDBCol>
                </MDBRow>
            </MDBContainer>


                {/* <h4>
                                        <span className="popularTeal">class</span>
                                        <span className="popularGreen"> CodyHoover</span>
                                        <span className="curlyClass"> {"{"}</span>
                                    </h4>
   
                                    <h4 className="ti">
                                        <span className="functionBrackets">constructor</span>
                                        <span className="purpleBrackets"> ()</span>
                                        <span className="purpleCurly"> {"{"}</span>
                                    </h4>


                                        <div  className="popularTeal">this</div>
                                        <div  className="objpropKey">.bootcampMERN</div>
                                        <div  className="equalsWhite"> =</div>
  
                                    <h4>
                                        <span className="objpropVal">`Completion Date 8/21/20`</span>
                                        <span className="equalsWhite">;</span>
                                    </h4>
                        
    
                        <div class="col">
                            <img src={Cody} className={"img-fluid"} alt="head shot of Cody Hoover" />
                        </div> */}



        </>

    )
}

export default AboutMe;