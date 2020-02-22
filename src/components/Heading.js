import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(./../images/Crystal-1.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi! <br />My name is Crystal</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1x9XHivcXtXIHqJDfomOh1hjvHwAj3ozJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(./../images/Crystal-2.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I love creating<br /> websites and apps!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/cml2377" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}