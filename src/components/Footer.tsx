import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        {/* Footer content placeholder */}
      </footer>

      <footer id="footer" className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="inner"></div>
          </div>
        </div>

        {/* Footer Center */}
        <div className="footer-center">
          <div className="container">
            <div className="inner">
              <div id="form_8200481315202102" className="row box8-h1 leooptimize ApRow has-bg bg-fullwidth">
                {/* Logo & Contact */}
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-sp-12 box8-content1 ApColumn">
                  <div className="header_logo-footer">
                    <Link href="/">
                      <Image 
                        className="logo img-fluid" 
                        src="/index_files/leo-vogaza-logo-1603779785.jpg" 
                        alt="Leo Vogaza"
                        width={200}
                        height={50}
                      />
                    </Link>
                  </div>
                  <div className="block contact-box ApHtml">
                    <div className="block_content">
                      <p>Box 565, Charlestown, Nevis, West<br />Indies,Caribbean</p>
                      <p><span>Email:</span> demo@demo.com</p>
                      <p><span>Phone:</span> +123 456 789</p>
                    </div>
                  </div>
                </div>

                {/* Lingerie Links */}
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-sp-12 left ApColumn">
                  <div className="block block-toggler ApLink ApBlockLink accordion_small_screen">
                    <div className="title clearfix" data-target="#footer-link-lingerie" data-toggle="collapse">
                      <h4 className="title_block">Lingerie</h4>
                      <span className="float-xs-right">
                        <span className="navbar-toggler collapse-icons">
                          <i className="material-icons add"></i>
                          <i className="material-icons remove"></i>
                        </span>
                      </span>
                    </div>
                    <ul className="collapse" id="footer-link-lingerie">
                      <li><a href="#">Bras</a></li>
                      <li><a href="#">Briefs</a></li>
                      <li><a href="#">Briefs Packs</a></li>
                      <li><a href="#">Lingerie</a></li>
                      <li><a href="#">Maternity</a></li>
                    </ul>
                  </div>
                </div>

                {/* Company Links */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-sp-12 right ApColumn">
                  <div className="block block-toggler ApLink ApBlockLink accordion_small_screen">
                    <div className="title clearfix" data-target="#footer-link-company" data-toggle="collapse">
                      <h4 className="title_block">Company</h4>
                      <span className="float-xs-right">
                        <span className="navbar-toggler collapse-icons">
                          <i className="material-icons add"></i>
                          <i className="material-icons remove"></i>
                        </span>
                      </span>
                    </div>
                    <ul className="collapse" id="footer-link-company">
                      <li><a href="#">Stores</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Press</a></li>
                      <li><a href="#">Policies</a></li>
                      <li><a href="#">Cookies Policy</a></li>
                    </ul>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-sp-12 email-col ApColumn">
                  <h4 className="title_block title-ap-column">NEWSLETTER SIGNUP</h4>
                  <div className="block_newsletter block" id="blockEmailSubscription_displayFooter">
                    <div className="block_content">
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-xs-12 p-off">
                            <p>Get updates by subscribe our weekly newsletter</p>
                          </div>
                          <div className="col-xs-12">
                            <div className="input-wrapper add-border">
                              <input name="email" type="email" placeholder="Your E-mail" required />
                              <button className="btn btn-outline float-xs-right" name="submitNewsletter" type="submit">
                                <i className="leofal fa-envelope"></i>
                              </button>
                            </div>
                            <input type="hidden" name="blockHookName" value="displayFooter" />
                            <input type="hidden" name="action" value="0" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="block-social">
                    <ul>
                      <li className="facebook">
                        <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="#" title="Instagram" target="_blank" rel="noopener noreferrer">
                          <span>Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="inner">
              <div id="form_8737123369395466" className="row box1f-h1 leooptimize ApRow has-bg bg-fullwidth">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-sp-12 ApColumn">
                  <div className="block ApRawHtml">
                    <p>Copyright © 2020 Vogaza. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
