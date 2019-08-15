import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import preview from './img/preview.png'

export default class About extends Component {
    render() {
      return (
      <div>
        <Helmet>
          <title>Dana Huget Portfolio</title>
          <meta name="description" content="React web app deployed on Firebase showcasing some of the software development and GIS work of Dana Huget" />
          <meta name="image" content={preview} />
          <meta name ="url" content="https://danahuget.com"/>
        </Helmet>
        <section className="welcome_area p_120">
          <div className="container">
            <div className="row welcome_inner">
              <div className="col-lg-7">
                <div className="welcome_text">
                  <h4>About Myself</h4>
                  <p>𝟣 Software engineering professional with a BSc 
                  focused in computer science & geography (think coding + maps) from the University 
                  of Victoria. <br /> 2 Proud founding member and VP of an all female motorcycle club.<br /> 
                  3 Pursuer of knowledge and understanding.<br /> 4 Literary consumer (and sometimes 
                  producer).<br /> 5 Large, small, any scale really, short, long, any duration too, traveller. </p>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-database" />
                        <h4>Android</h4>
                        <p>Development</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-book" />
                        <h4>Agile</h4>
                        <p>Methodologies</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wel_item">
                        <i className="lnr lnr-users" />
                        <h4>Team</h4>
                        <p>Small & Diverse</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="tools_expert">
                  <div className="skill_main">
                    <div className="skill_item">
                      <h4>GIT, JIRA, Bitbucket</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Java, Javascript</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>System Design & Architecture</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>GIS Software</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Develop, Manage, Model Spatial Data/Databases</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="skill_item">
                      <h4>Aptitude to Learn New Software, Tools & Languages</h4>
                      <div className="progress_br">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
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