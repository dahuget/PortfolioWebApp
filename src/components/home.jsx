import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import {BrowserRouter} from 'react-router-dom'
import BrowserRouterLinks from './browser-router-links'
import Pdf from '../documents/DanaHuget-Resume.pdf'
import personalImg from './img/personal.jpg'
import soundFile from '../assets/blown-away.mp3'
import preview from './img/preview.png'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { play: true };
  }
  play = () => {
    if (!this.state.play) {
      this.setState({ play: true });
      this.audio.play();
    } else {
      this.setState({ play: false });
      this.audio.pause();
    }
  }
  render() {
      return (
      <div>
        <Helmet>
          <title>Dana Huget Portfolio</title>
          <meta name="description" content="React web app deployed on Firebase showcasing some of the software development and GIS work of Dana Huget" />
          <meta name="image" content={preview} />
          <meta name ="url" content="https://danaaliyah.com"/>
        </Helmet>
        <section className="home_banner_area">
          <div className="personal_text">
            <h6 className="audio"><i className={!this.state.play ? "lnr lnr-volume": "lnr lnr-volume-high"} onClick={this.play} />blow away by george harrison <br/>background images <a style={{ color: 'inherit' }} href="https://www.instagram.com/mitchellvilla/">@MitchellVilla</a></h6>
            <audio id="song" ref={(audio) => { this.audio = audio } } src={soundFile} autoPlay loop/>
          </div>
          <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media">
                  <div className="d-flex">
                    <img style={{ width: '100%', borderRadius : 12 }} src={personalImg} />
                  </div>
                  <div className="media-body">
                    <div className="personal_text">
                      <h6>Hello there, I am</h6>
                      <h3>dana huget</h3>
                      <h4>software developer, bsc geomatics</h4>
                      <ul className="list basic_info">
                        <li><a href={Pdf} target = "_blank"><i className="lnr lnr-download" />Resume</a></li>
                        <li><a href="mailto: danaliyahuget@gmail.com"><i className="lnr lnr-envelope" />Email Me</a></li>
                        <li><a href="https://goo.gl/maps/FpXecvVV91kDRQex9" target="_blank"><i className="lnr lnr-map-marker" /> Victoria, BC Canada</a></li>
                      </ul>
                      <ul className="list personal_social">
                        <li><a href="https://www.linkedin.com/in/dana-huget" target="_blank"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/dahuget" target="_blank"><i className="fa fa-github" /></a></li>
                        <li><a href="https://danahuget.home.blog" target="_blank"><i className="fa fa-wordpress" /></a></li>
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