import React, { Component } from 'react'

export default class About extends Component {
    render() {
      return (
      <div>
        {/*================End Home Banner Area =================*/}
        {/*================Welcome Area =================*/}
        <section className="welcome_area p_120">
          <div className="container">
            <div className="row welcome_inner">
              <div className="col-lg-6">
                <div className="welcome_text">
                  <h4>About Myself</h4>
                  <p>𝗗𝗮𝗻𝗮 [dānə] 𝘯𝘰𝘶𝘯<br /> 𝟣 Software engineering professional with a BSc focused in computer science & geography (think coding + maps) from University of Victoria and proud founding member of an all female motorcycle club.</p>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-database" />
                        <h4>$2.5M</h4>
                        <p>Total Donation</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-book" />
                        <h4>1465</h4>
                        <p>Total Projects</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-users" />
                        <h4>3965</h4>
                        <p>Total Volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tools_expert">
                  <div className="skill_main">
                    <div className="skill_item">
                      <h4>After Effects <span className="counter">85</span>%</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Photoshop <span className="counter">90</span>%</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Illustrator <span className="counter">70</span>%</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Sublime <span className="counter">95</span>%</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Sketch <span className="counter">75</span>%</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                        </div>
                      </div>
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