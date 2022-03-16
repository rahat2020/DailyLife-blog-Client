import React from 'react';
import './Header.css';
import rahat from '../../img/rahat.png';

export default function Header() {
  return (
    <div className="header">
      <h3 className="text-center mb-4">Trending </h3>
      {/* <div className="headerTitles">
        <span className="headerTitleSm">Life & Fashion</span>
        <span className="headerTitleLg">DAILY BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      /> */}

      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-inner">
              <div className="carousel-item-active">
               
              </div>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="row">
              <div className="col-md-5">
                <div className="imgContainer">
                  <img className="slide-img-one" src="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp" alt="..." />
                </div>
              </div>
              <div className="col-md-7">
                <div className="textContainer">
                  <div className="d-flex">
                    <span className="fw-bold">Business, Travel </span> <span className="text-muted">— July 2, 2020</span>
                  </div>
                  <h1 className="fw-bolder">News Needs to Meet Its Audiences Where They Are</h1>
                  <span className="para text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit hic laborum iure eligendi qui quia, nulla unde quisquam, voluptatem est. Deleniti culpa, dignissimos sunt nesciunt error itaque sed qui.</span>
                  <div className="authorProfile">
                    <span className="d-flex justify-content-start align-items-center mb-3 pb-2 h-100 ">
                      <img src={rahat} alt="" className="profileImg" />
                    </span>
                    <span className="profileTitle">
                      <strong>Kazi Rahat</strong>
                      <span>CEO and Founder </span>
                    </span>
                  </div>
                  <button className="btnReadmore">Read more</button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div id="carouselExampleControls" class="carousel slide panda-pic mt-3 " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-inner">
              <div class="carousel-item-active">
                <div className="row">

                  <div className="col-md-5">
                    <div className="imgContainer">
                      <img className="slide-img-one" src="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="textContainer">
                      <div className="d-flex">
                        <span className="fw-bold">Business, Travel </span> <span className="text-muted">— July 2, 2022</span>
                      </div>
                      <h1 className="fw-bolder">News Needs to Meet Its Audiences Where They Are</h1>
                      <span className="para text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit hic laborum iure eligendi qui quia, nulla unde quisquam, voluptatem est. Deleniti culpa, dignissimos sunt nesciunt error itaque sed qui.</span>
                      <div className="authorProfile">
                        <span className="d-flex justify-content-start align-items-center mb-3 pb-2 h-100 ">
                          <img src={rahat} alt="" className="profileImg" />
                        </span>
                        <span className="profileTitle">
                          <strong>Kazi Rahat</strong>
                          <span>CEO and Founder </span>
                        </span>
                      </div>
                      <button className="btnReadmore">Read more</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* slide two */}
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-5">
                <div className="imgContainer">
                  <img className="slide-img-one" src="https://preview.colorlib.com/theme/magdesign/images/xpost_lg_4.jpg.pagespeed.ic.hSr_aHpE_J.webp" alt="..." />
                </div>
              </div>
              <div className="col-md-7">
                <div className="textContainer">
                  <div className="d-flex">
                    <span className="fw-bold">Business, Travel </span> <span className="text-muted">— July 5, 2022</span>
                  </div>
                  <h1 className="fw-bolder">Your most unhappy customers are your greatest source of learning.</h1>
                  <span className="para text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit hic laborum iure eligendi qui quia, nulla unde quisquam, voluptatem est. Deleniti culpa, dignissimos sunt nesciunt error itaque sed qui.</span>
                  <div className="authorProfile">
                    <span className="d-flex justify-content-start align-items-center mb-3 pb-2 h-100 ">
                      <img src={rahat} alt="" className="profileImg" />
                    </span>
                    <span className="profileTitle">
                      <strong>Kazi Rahat</strong>
                      <span>CEO and Founder </span>
                    </span>
                  </div>
                  <button className="btnReadmore">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  )
}
