import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" />
                            <h1 id="colorlib-logo"><a href="index.html">Crystal Ly</a></h1>
                            <span className="email"><i className="icon-mail"></i> crystal.ly@utexas.edu</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/Crystalmly" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                                <li><a href="https://twitter.com/crystalmly" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                                <li><a href="https://www.instagram.com/crystalmly/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/crystal-m-ly/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/cml2377" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                <br></br>
                                Thanks to all of the Youtube videos, TAs, and teachers at UT Austin's coding bootcamp! Thank you Github and the entire coding community!
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}