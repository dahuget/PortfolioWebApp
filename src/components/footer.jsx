export default function Footer() {
  return (
    <>
      <footer className="footer_area p_foot">
        <div className="container" style={{ paddingRight: 0, marginRight: 0 }}>
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
                  Made with <i className="fa fa-heart-o" aria-hidden="true" style={{ color: '#EB9DA9' }} /> and the help of <a href="https://colorlib.com" target="_blank" style={{ color: '#777777' }} rel="noreferrer">Colorlib</a> | © All rights reserved
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </aside>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}