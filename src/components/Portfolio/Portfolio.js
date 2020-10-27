import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import ModalDineIn from "../Modals/ModalDineIn/ModalDineIn";
import JumboTronPortfolio from "../JumboTronPortfolio/JumboTronPortfolio";
import ModalBurger from "../Modals/ModalBurgers/ModalBurgers";
import ModalPokemon from "../Modals/ModalPokemon/ModalPokemon";
import ModalWorkoutTracker from "../Modals/ModalWorkoutTracker/ModalWorkoutTracker";
import "../Portfolio/Portfolio.css";
import ModalMovie from '../Modals/ModalMovie/ModalMovie';
import ModalZillow from '../Modals/ModalZillow/ModalZillow';
import JumbotronContact from '../JumboTronContact/JumboTronContact';

const Portfolio = () => {
    return (
        <>
            <JumboTronPortfolio></JumboTronPortfolio>

            {/* CUSTOM CARD START */}
            <MDBRow className="background d-flex flex-row justify-content-center">
                <MDBCol size="10" className="theCol">
                    <MDBRow className="text-center d-flex flex-row justify-content-center">

                        {/* Zillow Clone*/}
                        <div className="card1 col-md-3 m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">ZILLOW CLONE</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            {/* TECHNOLOGIES USED */}
                            <div>
                                <div>
                                    <p className="technologiesUsed">MongoDB Atlas - Express/Node</p>
                                    <p className="technologiesUsed">React - Auth0 -  Leaflet</p>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalZillow />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div class="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/real-estate" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://washburn-real-estate.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>

                        {/* WORKOUT TRACKER*/}
                        <div className="card1 col-md-3 m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">WORKOUT LOG</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            {/* TECHNOLOGIES USED */}
                            <div>
                                <div>
                                    <p className="technologiesUsed">MongoDB - Mongoose ODM</p>
                                    <p className="technologiesUsed">Bootstrap - Express/Node</p>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalWorkoutTracker />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div class="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/MongoDBWorkoutTracker" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://codydevloop-workout-tracker.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>

                        {/* MOVIE DB*/}
                        <div className="card1 col-md-3  m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">THE MOVIE DB</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            {/* TECHNOLOGIES USED */}
                            <div>
                                <div>
                                    <p className="technologiesUsed">MySQL - NPM mysql/mysql2 </p>
                                    <p className="technologiesUsed">Passport Auth - Express/Node</p>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalMovie />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div class="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/identity_persona" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://myflix-project2.herokuapp.com" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>

                        {/* DA-BURGER*/}
                        <div className="card1 col-md-3  m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">EAT-DA-BURGER</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="technologiesUsed">MySQL - NPM mysql/mysql2 </p>
                                    <p className="technologiesUsed">Handlebars - Express/Node</p>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalBurger />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div class="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/burger" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://pure-taiga-10288.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>
                        {/* DINE-IN DINE-OUT */}
                        <div className="card1 col-md-3 m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">DINE-IN/OUT</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="technologiesUsed">jQuery - UIkit - ajax </p>
                                    <p className="technologiesUsed">Server-side APIs - moment.js</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* #### MODAL #### */}
                                    <ModalDineIn />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div className="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/DineInDineOut-Group-Project" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div>
                                    <a href="https://codydevloop.github.io/DineInDineOut-Group-Project/" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>

                        {/* POKEMON*/}
                        <div className="card1 col-md-3 m-5">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">REACT/POKEMON</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="technologiesUsed">React - State - Props -Components </p>
                                    <p className="technologiesUsed">Bootstrap - Express/Node</p>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalPokemon />
                                    <p className="cardFont">README</p>
                                </div>
                            </div>
                            <div class="repoDeployFlex">
                                <div>
                                    <a href="https://github.com/codydevloop/React_Pokemon" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://codydevloop.github.io/React_Pokemon/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>

                    </MDBRow>
                </MDBCol>
            </MDBRow>


            <JumbotronContact></JumbotronContact>


        </>
    )
}

export default Portfolio;