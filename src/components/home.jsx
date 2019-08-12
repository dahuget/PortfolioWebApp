import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import {BrowserRouter} from 'react-router-dom'
import BrowserRouterLinks from './browser-router-links'
import Pdf from '../documents/DanaHuget-Resume.pdf'
import personalImg from './img/personal.jpg'
import soundFile from '../assets/seriously.mp3'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { play: true };
  }
  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  }
  render() {
      return (
      <div>
        <Helmet>
          <title>Dana Huget Portfolio</title>
          <meta name="description" content="Home page for the Dana Huget Portfolio where you can find contact information, resume, and more!" />
        </Helmet>
        {/* <BrowserRouter>
          <BrowserRouterLinks />
        </BrowserRouter> */}
        <section className="home_banner_area">
          <div className="personal_text">
            <h6 className="audio"><i className={!this.state.play ? "lnr lnr-volume" : "lnr lnr-volume-high"} onClick={this.play} />seriously by shlohmo</h6>
            <audio ref={(audio) => { this.audio = audio } } src={soundFile} autoPlay loop/>
          </div>
          <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media">
                  <div className="d-flex">
                    <img src={personalImg} alt />
                  </div>
                  <div className="media-body">
                    <div className="personal_text">
                      <h6>hello there onlookers, i am</h6>
                      <h3>dana huget</h3>
                      <h4>software developer, bsc geomatics</h4>
                      <ul className="list basic_info">
                        <li><a href={Pdf} target = "_blank"><i className="lnr lnr-download" />Resume</a></li>
                        <li><a href="mailto: danaliyahuget@gmail.com"><i className="lnr lnr-envelope" />Email Me</a></li>
                        <li><a href="https://goo.gl/maps/FpXecvVV91kDRQex9" target="_blank"><i className="lnr lnr-home" /> Victoria, BC Canada</a></li>
                      </ul>
                      <ul className="list personal_social">
                        <li><a href="https://www.linkedin.com/in/dana-huget" target="_blank"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/dahuget" target="_blank"><i className="fa fa-github" /></a></li>
                        <li><a href="https://dahuget.home.blog" target="_blank"><i className="fa fa-wordpress" /></a></li>
                        <li><a href="https://www.instagram.com/honeypothogs" target="_blank"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}