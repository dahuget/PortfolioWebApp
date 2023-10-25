import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import SlideShow from 'react-image-show'
import ReactPlayer from 'react-player'
import climateMap from './img/climate-map.PNG'
import iosApps from './img/ios-apps.png'
import metroHomicidesMap from './img/metro-homicides-map.png'
import vacancyDensityMap from './img/vacancy-density-map.png'
import motoFlash from './img/moto-flash.png'
import virtualWorld from './img/virtual-world.png'
import preview from './img/preview.png'
import film00 from './img/film-00.png'
import film0 from './img/film-0.png'
import film1 from './img/film-1.png'
import film2 from './img/film-2.png'
import film3 from './img/film-3.png'
import film4 from './img/film-4.png'
import film5 from './img/film-5.png'
import film6 from './img/film-6.png'
import film7 from './img/film-7.png'
import film8 from './img/film-8.png'
import film9 from './img/film-9.png'
import film10 from './img/film-10.png'
import film11 from './img/film-11.png'
import film12 from './img/film-12.png'
import film13 from './img/film-13.png'
import film14 from './img/film-14.png'
import film15 from './img/film-15.png'
import film16 from './img/film-16.png'
import film17 from './img/film-17.png'
import film18 from './img/film-18.png'
import film19 from './img/film-19.png'
import film20 from './img/film-20.png'
import film21 from './img/film-21.png'
import film22 from './img/film-22.png'
import film23 from './img/film-23.png'

export default class Projects extends Component {
  render() {
    const imgArray = [
      film00, film0, film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14, film15, film16, film17, film18, film19, film20, film21, film22, film23
    ];
    return (
      <div>
        <Helmet>
          <title>Dana Huget Portfolio | Software Developer</title>
          <meta name="description" content="Check out the projects showcasing the work of GIS and full-stack web software developer Dana Huget" />
          <meta name="image" content={preview} />
          <meta name ="url" content="https://danaaliyah.com" />
          <link rel="canonical" href="https://danaaliyah.com/" />
          <meta name="robots" content="index, follow" />
          <meta property="og:url" content="https://danaaliyah.com" />
          <meta property="og:title" content="Dana Huget profile page" />
          <meta property="og:description" content="Check out the projects showcasing the work of GIS and full-stack web software developer Dana Huget" />
          <meta property="og:site_name" content="Dana Huget Portfolio | Software Developer" />
          <meta property="og:type" content="profile" />
          <meta property="profile:first_name" content="Dana" />
          <meta property="profile:last_name" content="Huget" />
          <meta property="og:locale" content="en_CA" />
          <meta property="og:image" content={preview} />
          <meta property="og:image:type" content="image/png" />
        </Helmet>
        <section className="home_gallery_area">
          <div className="container">
            <div className="main_title">
              <h2>Personal Projects</h2>
              <p><i>(Click titles to link to Github source code)</i></p>
            </div>
          </div>
          <div className="container projects_container">
            <div className="gallery_f_inner row imageGallery1">
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={climateMap} alt='Climate Map' />
                    {/* <a className="light" href={climateMap}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/ClimateWebApp" target="_blank" rel="noreferrer">
                      <h4>Interactive Global Climate Web App</h4>
                    </a>
                    <p>Mapbox Studio, Javascript</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={motoFlash} alt='2D Flash Animation' />
                    {/* <a className="light" href={motoFlash}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/2DFlashAnimation" target="_blank" rel="noreferrer">
                      <h4>2D Flash Animation</h4>
                    </a>
                    <p>OpenGL, C++ & GLSL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={virtualWorld} alt='3D Virtual World' />
                    {/* <a className="light" href={virtualWorld}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/VirtualWorld" target="_blank" rel="noreferrer">
                      <h4>3D Virtual World Rendering</h4>
                    </a>
                    <p>OpenGL, C++ & GLSL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={vacancyDensityMap} alt='Vacancy Density Map' />
                    {/* <a className="light" href={vacancyDensityMap}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://danahuget.home.blog/2019/05/27/analyzing-canadian-census-data/" target="_blank" rel="noreferrer">
                      <h4>How To Analyze Canadian Census Data Blog</h4>
                    </a>
                    <p>WordPress, R</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={metroHomicidesMap} alt='Metro Vancouver Homicides Map' />
                    {/* <a className="light" href={metroHomicidesMap}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://danahuget.home.blog/2019/05/27/analyzing-homicides-in-the-greater-vancouver-area/" target="_blank" rel="noreferrer">
                      <h4>Crime Point Pattern Analysis Blog</h4>
                    </a>
                    <p>WordPress, R</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src={iosApps} alt='iOS Apps' />
                    {/* <a className="light" href={iosApps}><img src={binoculars} /></a> */}
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/repodanes/tree/master/iOS-apps" target="_blank" rel="noreferrer">
                      <h4>Various Simple iOS Apps</h4>
                    </a>
                    <p>Swift</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design"></div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                <div className="h_gallery_item">
                  <div className="g_img_item g_video_item">
                    <ReactPlayer url='https://youtu.be/rqq_HcngMFQ' />
                  </div>
                  <div className="g_item_text">
                    <h4 style={{ color: '#EB9DA9'}}>AI Intake Web App</h4>
                    <p>Demo of GoLang app integrated with patient triage API</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design"></div>
            </div>
            <div className="more_btn">
              <a className="main_btn" href="https://github.com/dahuget" target="_blank" rel="noreferrer">More on Github</a>
            </div>
            <div>
              <SlideShow
                images={imgArray}
                width="920px"
                imagesWidth="800px"
                imagesHeight="450px"
                imagesHeightMobile="56vw"
                thumbnailsWidth="920px"
                thumbnailsHeight="12vw"
                indicators thumbnails fixedImagesHeight
              />
              <div className="gallery-text">
                <h4>Film Photography</h4>
                <p>Vanvouver Isl, Edmonton, Austin, Quadra Isl, Montreal</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}