import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
      return (
      <div>
        <section className="home_gallery_area p_120">
          <div className="container">
            <div className="main_title">
              <h2>Personal Projects</h2>
              <p><i>(Click titles to link to Github source code)</i></p>
            </div>
          </div>
          <div className="container">
            <div className="gallery_f_inner row imageGallery1">
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/climate-map.PNG" alt />
                    <a className="light" href="img/projects/climate-map.PNG"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/ClimateWebApp" target="_blank">
                      <h4>Interactive Global Climate Web App</h4>
                    </a>
                    <p>Mapbox Studio, Javascript</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/moto-flash.png" alt />
                    <a className="light" href="img/projects/moto-flash.png"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text"> 
                    <a href="https://github.com/dahuget/2DFlashAnimation" target="_blank">
                      <h4>2D Flash Animation</h4>
                    </a>
                    <p>OpenGL, C++ & GLSL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/virtual-world.png" alt />
                    <a className="light" href="img/projects/virtual-world.png"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/VirtualWorld" target="_blank">
                      <h4>3D Virtual World Rendering</h4>
                    </a>
                    <p>OpenGL, C++ & GLSL</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/vacancy-density-map.png" alt />
                    <a className="light" href="img/projects/vacancy-density-map.png"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text">
                    <a href="https://dahuget.home.blog/2019/05/27/analyzing-canadian-census-data/" target="_blank">
                      <h4>How To Analyze Canadian Census Data Blog</h4>
                    </a>
                    <p>WordPress, R</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/metro-homicides-map.png" alt />
                    <a className="light" href="img/projects/metro-homicides-map.png"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text">
                    <a href="https://dahuget.home.blog/2019/05/27/analyzing-homicides-in-the-greater-vancouver-area/" target="_blank">
                      <h4>Crime Point Pattern Analysis Blog</h4>
                    </a>
                    <p>WordPress, R</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                <div className="h_gallery_item">
                  <div className="g_img_item">
                    <img className="img-fluid" src="img/projects/ios-apps.png" alt />
                    <a className="light" href="img/projects/ios-apps.png"><img src="img/binoculars-icon.png" alt /></a>
                  </div>
                  <div className="g_item_text">
                    <a href="https://github.com/dahuget/repodanes/tree/master/iOS-apps" target="_blank">
                      <h4>Various Simple iOS Apps</h4>
                    </a>
                    <p>Swift</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="more_btn">
              <a className="main_btn" href="https://github.com/dahuget" target="_blank">More on Github</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}