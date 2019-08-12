import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Experience extends Component {
    render() {
      return (
      <div>
        <Helmet>
          <title>Dana Huget Portfolio</title>
          <meta name="description" content="Dana Huget experience and education timelines" />
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
                          <p style={{paddingLeft: '20px'}}>Sept 2018 to Present</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.19labs.com/" target="_blank">
                            <h4>19Labs</h4>
                          </a>
                          <p>Intermediate Software Engineer <br />Victoria, BC</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p>April 2018 to Sept 2018</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.19labs.com/" target="_blank">
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
                          <p>Sept 2017 to Dec 2017</p>
                        </div>
                        <div className="media-body">
                          <a href="https://indrorobotics.ca" target="_blank">
                            <h4>InDro Robotics & Remote Sensing</h4>
                          </a>
                          <p>Jr Autonomous Systems Engineer (Coop) <br />Salt Spring Island, BC</p>
                        </div>
                      </div>
                    </li><li>
                      <span />
                      <div className="media">
                        <div className="d-flex">
                          <p>Sept 2014 to Dec 2015</p>
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
                          <p style={{marginRight: '15px'}}>Jan 2016 to Dec 2018</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.uvic.ca/socialsciences/geography/undergraduate/programs/geomatics/index.php" target="_blank">
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
                          <a href="https://indrorobotics.ca/training" target="_blank">
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
                          <p>Jan 2012 to April 2012</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.concordia.ca" target="_blank">
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
                          <p>Sept 2010 to Dec 2011</p>
                        </div>
                        <div className="media-body">
                          <a href="https://www.macewan.ca/English" target="_blank">
                            <h4>Macewan University</h4>
                          </a>
                          <p>English <br />Edmonton, AB</p>
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