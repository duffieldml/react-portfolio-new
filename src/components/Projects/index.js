//This is for the contact me page

import React from "react";
import { Container } from "../Grid"
import Hero from "../Hero"
import "./style.css"

function Projects() {
    return (
        <div className="class container">
            <section className="row">
                <div className="col-md-12">
                    <br></br>
                    <h2>Portfolio</h2>
                    <hr className="line"></hr>
                    <br></br>
                    <div className="card-deck">
                        <div className="card">
                            <a href="https://vshulman25.github.io/drinksplease/">
                                <img className="card-img-top" src="../../assets/Drinks-screenshot.jpg"
                                    alt="Drinks Please! Screenshot" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Drinks Please!</h5>
                                <p className="card-text">This was a group project. This will give you a
                                    recommended drink based on the temperature of the city you input. If you're
                                    city
                                    is
                                    currently warmer than 50 degrees, it recommends a cold drink. If colder than
                                    50
                                    degrees, it recommends a hot drink. If you do not like the drink, you can
                                    press
                                    the
                                    "Hit me again!" button, which will return a random drink suggestion!</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href="https://github.com/vshulman25/drinksplease">Github Repo</a></small>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://duffieldml.github.io/Weather-Dashboard/">
                                <img className="card-img-top" src="../../assets/Weather-Dashboard.jpg"
                                    alt="Weather Dashboard Screenshot" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>
                                <p className="card-text">This is a weather dashboard. Once the user inputs a city,
                                    it
                                    will return with the current weather conditions and a 5 day forecast as
                                    well. It
                                    will also save previously searched cities on the side. You can click these
                                    cities to get the current weather and 5 day forecast as well.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href="https://github.com/duffieldml/Weather-Dashboard">Github
                                        Repo</a></small>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://duffieldml.github.io/Day-Planner-Homework/">
                                <img className="card-img-top" src="../../assets/Day-planner.jpg"
                                    alt="Day Planner Screenshot" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Day Planner</h5>
                                <p className="card-text">This is a day planner to help keep track of your busy day.
                                    It
                                    allows you to put your schedule in at corresponding time and save it. If you
                                    refresh the page, it will keep the saved tasks in the correct time slots. It
                                    changes the timeslot color to green if it is an upcoming event. If the
                                    timeslot is current, it will change the color to red. If the timeslot has
                                    past,
                                    it will change the color to grey</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href="https://github.com/duffieldml/Day-Planner-Homework">Github
                                        Repo</a></small>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://safe-reef-51323.herokuapp.com/">
                                <img className="card-img-top" src="../../assets/burger-logger.png"
                                    alt="Burger Screenshot" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Burger Logger</h5>
                                <p className="card-text">This is a burger logger to help keep track of different
                                    burgers. It uses node.js, express, handlebars, mysql, and a homemade ORM. It
                                    allows the user to either devour a burger, or recreate the burger if they
                                    want. It is deployed to Heroku for hosting and is using JawsDB so that it
                                    continues to work with mysql.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href="https://github.com/duffieldml/eat-da-burger">Github
                                        Repo</a></small>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://vaccine-app-project2.herokuapp.com/">
                                <img className="card-img-top" src="../../assets/vaccine.png" alt="vaccine" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Vax Trax</h5>
                                <p className="card-text">Vax Trax is a group project where we
                                    designed a covid-19 signup vaccine page.
                                    The user would provide their email, name, the state they currently live in,
                                    if they are under or over 65 years of age, and if they are an essential
                                    worker. If the
                                    person was eligible to receive the vaccine, an embedded google maps would
                                    show the closest vaccine clinic to them, along with other covid-19
                                    statistics.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href="https://github.com/mkassem917/shots">Github
                                        Repo</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects
