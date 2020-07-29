import React from 'react';
import { MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Nav.css"
import AboutMe from "../AboutMe/AboutMe";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {


        const container = { height: "1300" }
        const bgLightBlue = {};
        const bgBlue = { backgroundColor: '#212121' }
        return (
            <div>
                <Router>

                    <MDBNavbar style={bgBlue} dark expand="md" scrolling fixed="top">
                        <MDBNavbarBrand href="/" className="codyMargin">
                            <p className='name'>CODY HOOVER</p>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right className="linkgroup">
                                <MDBNavItem>
                                    <MDBNavLink to="#" className="link">PORTFOLIO</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className="link">ABOUT</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className="link">CONTACT</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>
            
            </div>
        );
    }
}

export default Nav;