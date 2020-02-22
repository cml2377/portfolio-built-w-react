import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Full-Stack Student at UT Austin's Coding Bootcamp <span>2019-present</span></h2>
                                                <p>Currently learning React. Working to be a full-stack developer. I would like to start out as a frontend developer because I am more comfortable working in React, HTML, CSS, and JavaScript, but I would like to eventually become strong in MongoDB and backend technologies.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Microbiologist at TX Dept of State Health Services<span>2013-2019</span></h2>
                                                <p>Food, Water, Dairy, and Shellfish testing for pathogens for the state of Texas. Main liaison with Meat Safety Assurance. Conducted internal audits and experienced in FDA, EPA, and TNI regulations. Experience in training, working in a team, and working independently on holidays.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>B.S. Human Biology, Pathogenesis and Immunity <span>2009-2012</span></h2>
                                                <p>I earned a bachelor's degree at the University of Texas at Austin. I also took summer courses at Austin Community College in order to graduate early.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}