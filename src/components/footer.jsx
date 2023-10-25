import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import preview from './img/preview.png'

export default class Footer extends Component {
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
        <footer className="footer_area p_foot">
          <div className="container" style={{paddingRight:0, marginRight: 0}}>
            <div className="row footer_inner">
              <div className="col-lg-7">
              </div>
              <div className="col-lg-5">
                <aside className="f_widget social_widget">
                  <ul className="list">connect with me &nbsp;|&nbsp;&nbsp;
                    <li><a href="mailto: danaliyahuget@gmail.com"><i className="fa fa-envelope" /></a></li>
                    <li><a href="https://www.linkedin.com/in/dana-huget" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/dahuget" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></li>
                    <li><a href="https://danahuget.home.blog" target="_blank" rel="noreferrer"><i className="fa fa-wordpress" /></a></li>
                    <li><a href="https://www.instagram.com/honeypothogs" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a></li>
                  </ul>
                  <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Made with <i className="fa fa-heart-o" aria-hidden="true" style={{ color: '#EB9DA9'}}/> and the help of <a href="https://colorlib.com" target="_blank" style={{color: '#777777'}} rel="noreferrer">Colorlib</a> | © All rights reserved
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                </aside>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}