export default function Home() {
  return (
    <>
      <section className="welcome_area p_120">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-7">
              <div className="welcome_text">
                <h4>About Myself</h4>
                <p><sup>1</sup> Software engineering professional with a BSc
                  focused in computer science & geography (think coding + maps) from the University
                  of Victoria. <br /> <sup>2</sup> Proud founding member and VP of an all female motorcycle club.<br />
                  <sup>3</sup> Pursuer of knowledge and understanding.<br /> <sup>4</sup> Literary consumer (and sometimes
                  producer).<br /> <sup>5</sup> Large, small, any scale really, short, long, any duration too, traveller. </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="wel_item">
                      <i className="lnr lnr-laptop-phone" />
                      <h4>Web+GIS</h4>
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
                    <h4>GIT, JIRA, GitHub, Bitbucket <span style={{ color: '#EB9DA9' }}>5 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={9} style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Java, Node JS, PHP, Kotlin <span style={{ color: '#EB9DA9' }}>2.5 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={4.5} aria-valuemin={0} aria-valuemax={9} style={{ width: '50%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Javascript, HTML, CSS <span style={{ color: '#EB9DA9' }}>5 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={9} style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>System & Architecture Design <span style={{ color: '#EB9DA9' }}>3.5 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={9} style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Develop, Model, Manage Spatial Databases <span style={{ color: '#EB9DA9' }}>3 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={9} style={{ width: '62.5%' }} />
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>Aptitude to Learn New Software, Tools & Languages <span style={{ color: '#EB9DA9' }}>5 years</span></h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={9} style={{ width: '100%' }} />
                      </div>
                    </div>
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