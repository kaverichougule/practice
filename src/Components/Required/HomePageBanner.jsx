import React from "react";
import leftimg from "../../assets/images/left-banner-image.jpg";
import img1 from "../../assets/images/baner-right-image-01.jpg";
import img2 from "../../assets/images/baner-right-image-02.jpg";
import img3 from "../../assets/images/baner-right-image-03.jpg";
import img4 from "../../assets/images/baner-right-image-04.jpg";
function HomePageBanner(props) {
  return (
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="thumb">
                <div className="inner-content">
                  <h4>We Are Hexashop</h4>
                  <span>Awesome, clean &amp; creative HTML5 Template</span>
                  <div className="main-border-button">
                    <a href="#">Purchase Now!</a>
                  </div>
                </div>
                <img src={leftimg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Women</h4>
                        <span>Best Clothes For Women</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Women</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src={img1} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Men</h4>
                        <span>Best Clothes For Men</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Men</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src={img2} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Kids</h4>
                        <span>Best Clothes For Kids</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Kids</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src={img3} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Accessories</h4>
                        <span>Best Trend Accessories</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Accessories</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src={img4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;