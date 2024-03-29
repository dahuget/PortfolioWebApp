import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Pdf from '../documents/DanaHuget-Resume.pdf';
import personalImg from './img/personal.jpg';
import soundFile from '../assets/blown-away.mp3';
import preview from './img/preview.png';

export default function Home() {
  const [play, setPlay] = useState(false);

  function handleAudioChange() {
    var song = document.getElementById('song');
    if (!play) {
      setPlay(true);
      song.play();
    } else {
      setPlay(false);
      song.pause();
    }
  }

  useEffect(() => {
    // Init bootstrap tooltip.
    window.$('[data-toggle="tooltip"]').tooltip();
  });

  return (
    <>
      <Helmet>
        <title>Dana Huget Portfolio | Software Developer</title>
        <meta name="description" content="Check out projects showcasing the work of Full Stack + GIS web software developer Dana Huget" />
        <meta name="image" content={preview} />
        <meta name="url" content="https://danaaliyah.com" />
        <link rel="canonical" href="https://danaaliyah.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://danaaliyah.com" />
        <meta property="og:title" content="Dana Huget profile page" />
        <meta property="og:description" content="Check out projects showcasing the work of Full Stack + GIS web software developer Dana Huget" />
        <meta property="og:site_name" content="Dana Huget Portfolio | Software Developer" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Dana" />
        <meta property="profile:last_name" content="Huget" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:image" content={preview} />
        <meta property="og:image:type" content="image/png" />
      </Helmet>
      <section className="home_banner_area">
        <div className="personal_text">
          <h6 className="audio">
            <i className={!play ? "lnr lnr-volume" : "lnr lnr-volume-high"} onClick={handleAudioChange} data-toggle="tooltip" data-placement="bottom" title="Play background music" />
            blow away by george harrison <br />background images
            <a style={{ color: 'inherit' }} href="https://www.instagram.com/mitchellvilla/">@MitchellVilla</a>
          </h6>
          <audio id="song" src={soundFile} autoPlay loop />
        </div>
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <img style={{ width: '100%', borderRadius: 12 }} src={personalImg} alt='Dana Huget' />
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Hello there, I am</h6>
                    <h3>dana huget</h3>
                    <h4>software developer, bsc geomatics</h4>
                    <ul className="list basic_info">
                      <li><a href={Pdf} target="_blank" rel="noreferrer"><i className="lnr lnr-download" />Resume</a></li>
                      <li><a href="mailto: danaliyahuget@gmail.com"><i className="lnr lnr-envelope" />Email Me</a></li>
                      <li><a href="https://goo.gl/maps/FpXecvVV91kDRQex9" target="_blank" rel="noreferrer"><i className="lnr lnr-map-marker" /> Victoria, BC Canada</a></li>
                    </ul>
                    <ul className="list personal_social">
                      <li><a href="https://www.linkedin.com/in/dana-huget" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="https://github.com/dahuget" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
                      <li><a href="https://danahuget.home.blog" target="_blank" rel="noreferrer"><i className="fa fa-wordpress" /></a></li>
                      <li><a href="https://www.instagram.com/honeypothogs" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}