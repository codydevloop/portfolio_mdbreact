import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './GridExamplesPage.css'; //Import here your file style

const gridExamplesPage = () => {
return (
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
);
}

export default gridExamplesPage;