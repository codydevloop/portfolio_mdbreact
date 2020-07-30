import React from 'react';
import { MDBContainer, MDBLink, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Nav.css"

import { Link, animateScroll as scroll } from "react-scroll";



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
                        <MDBNavbarBrand className="codyMargin">
                            <p className='name'>CODY HOOVER</p>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right className="linkgroup">
                                <div className="myStyle">
                                    <Link
                                        activeClass="active"
                                        to="AboutScrollTag"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                        className="linkgroup"
                                    >ABOUT</Link>
                                    <Link
                                        activeClass="active"
                                        to="PortfolioScrollTag"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                        className="linkgroup"
                                    >PORTFOLIO</Link>
                                <Link
                                    activeClass="active"
                                    to="ContactScrollTag"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    className="linkgroup"

                                >CONTACT </Link>
                                </div>
                                
                            {/* <MDBNavItem>
                                    <MDBNavLink to="/Portfolio" className="link" >PORTFOLIO</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" className="link">ABOUT</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="contact" className="link">CONTACT</MDBNavLink>
                                </MDBNavItem> */}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>

            </div >
        );
    }
}

export default Nav;