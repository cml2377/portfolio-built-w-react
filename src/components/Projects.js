import React, { Component } from 'react';
import ColossalHog from "../components/images/Colossal-Hog.png";
import WanderDog from "../components/images/wanderdog.png";
import CapitalsQuiz from "../components/images/Capitals-Quiz.png";
import DayPlanner from "../components/images/Day-Planner.png";
import DevProfile from "../components/images/Dev-Profile-Generator.png";
import EmployeeTracker from "../components/images/employee-tracker.gif";
import NoteTaker from "../components/images/note-taker.gif";
import PasswordGen from "../components/images/Password-Generator.png";
import ReactWeather from "../components/images/React-Weather.png";
import SequelizeEssay from "../components/images/Sequelize-Essay.png";
import TeamGen from "../components/images/Team-Generator.png";
import WeatherDash from "../components/images/weather-dashboard-1.0.png";


export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${ColossalHog})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/THE-PACK">Colossal Hog</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 359</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 98</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WanderDog})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/kimiinglet/meanLeanFreakGoat">WanderDog</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 670</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 306</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: `url(${CapitalsQuiz})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/World-Capitals-Quiz">Capitals Quiz</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 472</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 204</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: `url(${DayPlanner})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Day-Planner">Day Planner</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 653</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 102</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${DevProfile})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/dev-profile-generator">Developer Profile Generator</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 451</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 92</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${EmployeeTracker})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Employee-Tracker">Employee Tracker</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 257</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 38</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${NoteTaker})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Note-Taker">Note Taker</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 242</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 89</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${PasswordGen})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Superb-Pass-Gen">Password Generator</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 564</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 220</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${ReactWeather})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/The-Ideal-Beginner-Reacts">Weather Around the World</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 131</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 51</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${SequelizeEssay})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://docs.google.com/document/d/18cKmNjvZLP9Z7b3pL-QAQlOlp28aZt6VzPo1Grfr9d0/edit?usp=sharing">Essay on Sequelize</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 235</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 67</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${TeamGen})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/team-generator">Team Generator</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 50</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 19</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WeatherDash})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/weather-dashboard">Weather Dashboard</a></h3>
                                            <p className="icon">
                                                <span><a href="#"><i className="icon-share3" /></a></span>
                                                <span><a href="#"><i className="icon-eye" /> 312</a></span>
                                                <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="https://github.com/cml2377" className="btn btn-primary btn-lg btn-load-more">See More <i className="icon-reload" /></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}