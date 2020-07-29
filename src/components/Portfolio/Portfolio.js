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

                        {/* DINE-IN DINE-OUT */}
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">Dine-In/Dine-Out</h3>
                                    <hr></hr>
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
                        {/* DA-BURGER*/}
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">EAT-DA-BURGER</h3>
                                    <hr></hr>
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
                        {/* POKEMON*/}
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">Pokemon-React</h3>
                                    <hr></hr>
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
                          {/* WORKOUT TRACKER*/}
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">Workout-Tracker</h3>
                                    <hr></hr>
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
                                    <a href="https://codydevloop-workout-tracker.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://github.com/codydevloop/MongoDBWorkoutTracker" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                    <p className="cardFont">DEPLOYED</p>
                                </div>
                            </div>
                        </div>
                        {/* MOVIE DB*/}             
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">THE MOVIE DB</h3>
                                    <hr></hr>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    {/* #### MODAL #### */}
                                    <ModalMovie/>
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
                        {/* Zillow Clone*/}  
                        <div className="card1 col-md-3 my-3 mx-3">
                            <div>
                                <div className="mt-2">
                                    <h3 className="titleFont">WIP - Zillow Clone</h3>
                                    <hr></hr>
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
                                    <a href="https://github.com/azu20/real-estate" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                    <p className="cardFont">REPO</p>
                                </div>
                                <div class="flexEnd">
                                    <a href="https://washburn-real-estate.herokuapp.com/" target="_blank"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
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