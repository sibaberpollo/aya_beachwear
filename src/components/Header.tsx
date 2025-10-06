import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <div className="header-container">
        {/* Header Banner */}
        <div className="header-banner">
          <div className="container">
            <div className="inner"></div>
          </div>
        </div>

        {/* Header Nav */}
        <nav className="header-nav">
          <div className="topnav">
            <div className="container">
              <div className="inner"></div>
            </div>
          </div>
          <div className="bottomnav">
            <div className="container">
              <div className="inner"></div>
            </div>
          </div>
        </nav>

        {/* Header Top */}
        <div className="header-top">
          <div className="inner">
            <div className="row box-top ApRow has-bg bg-boxed" style={{background: 'no-repeat'}} data-bg_data=" no-repeat">
              
              {/* Phone Section */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-sp-4 left ApColumn">
                <div className="block ApHtml">
                  <div className="block_content">
                    <div className="img-phone">
                      <p>Call us</p>
                      <h5>+048 1800 333 99</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Section */}
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-sp-12 ApColumn">
                <div className="header_logo">
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
              </div>

              {/* Search & User Section */}
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-xs-6 col-sp-8 right ApColumn">
                {/* Search Block */}
                <div id="leo_search_block_top" className="block exclusive search-by-category">
                  <h4 className="title_block">Search</h4>
                  <form method="get" action="#" id="leosearchtopbox">
                    <input type="hidden" name="fc" value="module" />
                    <input type="hidden" name="module" value="leoproductsearch" />
                    <input type="hidden" name="controller" value="productsearch" />
                    <div className="block_content clearfix leoproductsearch-content">
                      <div className="list-cate-wrapper">
                        <input id="leosearchtop-cate-id" name="cate" value="" type="hidden" />
                        <a href="#" id="dropdownListCateTop" className="select-title" rel="nofollow">
                          <span>All Categories</span>
                          <i className="material-icons pull-xs-right">keyboard_arrow_down</i>
                        </a>
                      </div>
                      <div className="leoproductsearch-result">
                        <input 
                          className="search_query form-control grey ac_input" 
                          type="text" 
                          id="leo_search_query_top" 
                          name="search_query" 
                          placeholder="Search" 
                          autoComplete="off" 
                        />
                      </div>
                      <button type="submit" id="leo_search_top_button" className="btn btn-default button button-small">
                        <span><i className="leofal leofa-search" aria-hidden="true"></i></span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* User Block */}
                <div id="leo_block_top" className="leo_block_top popup-over dropdown js-dropdown">
                  <a href="#" data-toggle="dropdown" className="popup-title" title="Setting">
                    <i className="leofal fa-user"></i>
                  </a>
                  <div className="popup-content dropdown-menu">
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="language-selector">
                          <span className="title">Language:</span>
                          <ul className="link">
                            <li className="current">
                              <a href="#" className="dropdown-item">
                                <Image src="/index_files/1.jpg" alt="en" width={16} height={11} />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="currency-selector">
                          <span className="title">Currency:</span>
                          <ul className="link">
                            <li className="current">
                              <a title="US Dollar" rel="nofollow" href="#" className="dropdown-item">USD</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <ul className="user-info">
                          <li>
                            <a className="signin" href="#" title="Log in to your customer account" rel="nofollow">
                              <span>Sign in</span>
                            </a>
                          </li>
                          <li>
                            <a className="myacount" href="#" title="My account" rel="nofollow">
                              <span>My account</span>
                            </a>
                          </li>
                          <li>
                            <a className="ap-btn-wishlist dropdown-item" href="#" title="Wishlist" rel="nofollow">
                              <span>Wishlist</span>
                              <span className="ap-total-wishlist ap-total">0</span>
                            </a>
                          </li>
                          <li>
                            <a className="checkout" href="#" title="Checkout" rel="nofollow">
                              <span>Checkout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wishlist Button */}
                <ul className="header-button-add float-xs-right">
                  <li>
                    <a className="ap-btn-wishlist" href="#" title="" rel="nofollow">
                      <i className="leofal fa-heart"></i>
                      <span className="ap-total-wishlist ap-total">0</span>
                    </a>
                  </li>
                </ul>

                {/* Cart */}
                <div id="_desktop_cart">
                  <div className="blockcart cart-preview inactive leo-blockcart show-leo-loading">
                    <div className="header">
                      <i className="leofal fa-shopping-bag" aria-hidden="true"></i>
                      <span className="cart-products-count">0</span>
                      <span className="price">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="row menu-box leooptimize ApRow has-bg bg-boxed">
              <div className="col-sm-12 col-xs-12 col-sp-12 col-md-12 col-lg-12 col-xl-12 ApColumn">
                <div id="memgamenu-form_8712930338245614" className="ApMegamenu">
                  <nav className="leo-megamenu cavas_menu navbar navbar-default enable-canvas" role="navigation">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggler hidden-lg-up">
                        <span className="sr-only">Toggle navigation</span>
                        ☰
                      </button>
                    </div>
                    <div className="leo-top-menu collapse navbar-toggleable-md megamenu-off-canvas">
                      <ul className="nav navbar-nav megamenu horizontal">
                        <li className="nav-item parent dropdown active">
                          <Link className="nav-link dropdown-toggle has-category" href="/">
                            <span className="menu-title">Home</span>
                          </Link>
                        </li>
                        <li className="nav-item parent dropdown aligned-fullwidth">
                          <a className="nav-link dropdown-toggle has-category" href="#">
                            <span className="menu-title">Pages</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link has-category" href="#">
                            <span className="menu-title">Blog</span>
                          </a>
                        </li>
                        <li className="nav-item parent dropdown aligned-fullwidth">
                          <a className="nav-link dropdown-toggle has-category" href="#">
                            <span className="menu-title">Shop</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link has-category" href="#">
                            <span className="menu-title">Portfolio</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link has-category" href="#">
                            <span className="menu-title">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
