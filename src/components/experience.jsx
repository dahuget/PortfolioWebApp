import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import preview from './img/preview.png'

export default class Experience extends Component {
    render() {
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
        <section className="mytabs_area p_120">
          <div className="container">
            <div className="tabs_inner">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <ul className="list">
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Jun 2021 - Oct 2023</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.trailmarksys.com/" target="_blank" rel="noreferrer">
                            <h4>Trailmark Systems</h4>
                          </a>
                          <h5>Community-based Indigenous web mapping & custom GIS software</h5>
                          <p>Web & GIS Developer <br />Victoria, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Sep 2018 - May 2021</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.19labs.com/" target="_blank" rel="noreferrer">
                            <h4>19Labs</h4>
                          </a>
                          <h5>A smart point-of-care solution that provides connected access to health care</h5>
                          <p>Intermediate Software Engineer <br />Victoria, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Apr 2018 - Sep 2018</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.19labs.com/" target="_blank" rel="noreferrer">
                            <h4>19Labs</h4>
                          </a>
                          <p>Junior Software Engineer (Coop) <br />Victoria, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Sep 2017 - Dec 2017</p>
                        </div>
                        <div className="media-body">
                          <a href="https://indrorobotics.ca" target="_blank" rel="noreferrer">
                            <h4>InDro Robotics & Remote Sensing</h4>
                          </a>
                          <h5>Full-range of remotely-piloted 'unmanned' aerial, water and land services</h5>
                          <p>Jr Autonomous Systems Engineer (Coop) <br />Salt Spring Island, BC</p>
                        </div>
                      </div>
                    </li><li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Sep 2014 - Dec 2015</p>
                        </div>
                        <div className="media-body">
                          <h4>Apollo Machine & Welding</h4>
                          <p>Procurement Specialist <br />Edmonton, AB</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <ul className="list">
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Jan 2016 - Dec 2018</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.uvic.ca/socialsciences/geography/undergraduate/programs/geomatics/index.php" target="_blank" rel="noreferrer">
                            <h4>University of Victoria</h4>
                          </a>
                          <p>BSc Combined Majors Geography & Computer Science (Geomatics) <br />Victoria, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p style={{paddingLeft: '40px', marginRight: '10px'}}>December 2017</p>
                        </div>
                        <div className="media-body">
                          <a href="https://indrorobotics.ca/training" target="_blank" rel="noreferrer">
                            <h4>InDro Robotics & Remote Sensing</h4>
                          </a>
                          <p>Compliant UAV Pilot <br />Salt Spring Island, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Jan 2012 - Apr 2012</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.concordia.ca" target="_blank" rel="noreferrer">
                            <h4>University of Concordia</h4>
                          </a>
                          <p>Independent Studies <br />Montreal, QC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p className="date-shift">Sep 2010 - Dec 2011</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.macewan.ca/English" target="_blank" rel="noreferrer">
                            <h4>Macewan University</h4>
                          </a>
                          <p>English & Classics<br />Edmonton, AB</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}