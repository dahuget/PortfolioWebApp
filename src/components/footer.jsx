import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
      return (
      <div>
        {/*================Footer Area =================*/}
      <footer className="footer_area p_foot">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-lg-7">
            </div>
            <div className="col-lg-5">
              <aside className="f_widget social_widget">
                <ul className="list">You oughta connect with me &nbsp;|&nbsp;&nbsp;
                  <li><a href="mailto: danaliyahuget@gmail.com"><i className="fa fa-envelope" /></a></li>
                  <li><a href="www.linkedin.com/in/dana-huget" target="_blank"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="https://github.com/dahuget" target="_blank"><i className="fa fa-github" /></a></li>
                  <li><a href="https://dahuget.home.blog/" target="_blank"><i className="fa fa-wordpress" /></a></li>
                  <li><a href="https://www.instagram.com/honeypothogs/" target="_blank"><i className="fa fa-instagram" /></a></li>
                </ul>
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Made with <i className="fa fa-heart-o" aria-hidden="true" /> and the help of <a href="https://colorlib.com" target="_blank">Colorlib</a> | © All rights reserved
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </aside>
            </div>
          </div>
        </div>
      </footer>
      {/*================End Footer Area =================*/}
      </div>
    )
  }
}