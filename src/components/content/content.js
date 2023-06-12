/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect } from "react";
import "./content.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import img1 from "../../assets/b1.jpg";
import img2 from "../../assets/b2.jpg";
import img3 from "../../assets/b3.jpg";
import img4 from "../../assets/b4.jpg";
import img5 from "../../assets/b5.jpg";
import img6 from "../../assets/b6.jpg";
import img7 from "../../assets/b7.jpg";
import img8 from "../../assets/b8.jpg";
import { Link } from "react-router-dom";

const Images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* BackGround */}
      <div className="container-fluid HomePage">
        <div>
          <div
            // style={{ height: "100vh" }}
            id="carouselExample"
            className="carousel slide background"
            data-ride="carousel"
            onMouseOver={() => setIsHovered(false)}
            onMouseOut={() => setIsHovered(true)}
          >
            <div className="carousel-inner">
              {Images.map((image, i) => (
                // <div className="carousel-item active" interval={5000}>
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  key={i}
                >
                  <img
                    src={image}
                    // alt={i}
                    alt={`Slide ${i}`}
                    className="d-block w-100"
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="Categories row">
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
              <h2 className="Categories-Title">Electronics</h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Camera/XCM_Manual_1584325_5643573_379x304_1X._SY304_CB603062836_.jpg"
              />
              <Link className="Categories-Link" to="/laptops">
                See more
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
              <h2 className="Categories-Title">Women's wear</h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
              />
              <Link className="Categories-Link" to="/womens-dresses">
                See more
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
              <h2 className="Categories-Title">Men's wear</h2>
              <img
                className="Categories-Image"
                src="https://m.media-amazon.com/images/I/41+apisiepS._AC_UL600_FMwebp_QL65_.jpg"
              />
              <Link className="Categories-Link" to="/mens-shirts">
                See more
              </Link>
            </div>
          </div>
          <div className="p-2 col-12 col-md-6 col-lg-3 mb-2">
            <div className="Categories-cards">
              <h2 className="Categories-Title">Jewllery</h2>
              <img
                className="Categories-Image"
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg"
              />
              <Link className="Categories-Link" to="/womens-jewellery">
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Electronics</h2>
              <Link className="Categories-Link" to="/laptops">
                See more
              </Link>
            </div>
            <div id="carouselExample1" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div
                      className="card mb-3 Category_Items_Card"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/51QLFW1PUJL._AC_UF226,226_FMjpg_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div
                      className="card mb-3 Category_Items_Card"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/41QgEpwYLdL._AC_UF226,226_FMjpg_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Head phones</p>
                      </div>
                    </div>
                    <div
                      className="card mb-3 card2 Category_Items_Card"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/41BFtfSlFJL._AC_UF226,226_FMjpg_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                    <div
                      className="card mb-3 card1 card2 Category_Items_Card"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/41LNkRBslPL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div
                      className="card mb-3 card1 card2 Category_Items_Card"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/41PjTl7DtzL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/41PjTl7DtzL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/51dvitonoTL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Legion Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31nPxO4OGvL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">Save on Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31ay6TFTcGL._AC_SY200_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 20% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Desktop Lc monitors
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/51QLFW1PUJL._AC_UF226,226_FMjpg_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample1"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample1"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-3 ">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Jewllery</h2>
              <Link className="Categories-Link" to="/womens-jewellery">
                See more
              </Link>
            </div>

            <div id="carouselExample2" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/31pRBFXVWFL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/31hOErxVIYL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Head phones</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/41v6clopErL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/413nnm0kEuL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/31UlyGP-VHL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/31UlyGP-VHL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/612Wb2mdfkL._AC_UL480_QL65_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Legion Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/I/31pRBFXVWFL._AC_SX184_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">Save on Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/51dj6rl4C3L._AC_UL480_QL65_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 20% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Desktop Lc monitors
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/51YVFSBGMKL._AC_UL480_QL65_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Top Summer Sale</h2>
              <Link className="Categories-Link" to="/womens-dresses">
                See more
              </Link>
            </div>

            <div id="carouselExample3" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199173_200x200_1X._CB604510554_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199182_200x200_1X._CB604510533_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199185_200x200_1X._CB604510516_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199177_200x200_1X._CB604510471_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199181_200x200_1X._CB604510516_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199181_200x200_1X._CB604510516_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199172_200x200_1X._CB604510486_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199174_200x200_1X._CB604510486_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199176_200x200_1X._CB604510486_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199170_200x200_1X._CB604510486_.jpg"
                        className="card-img-top mx-auto d-block Category_Offers_Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample3"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample3"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-3 ">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Men's clothing</h2>
              <Link className="Categories-Link" to="/mens-shirts">
                See more
              </Link>
            </div>
            <div id="carouselExample4" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/41KV6ivR+5L._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/41pSWFERRXL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Head phones</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31tAcZFAICL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31ASt2aJ8pS._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31OC2Lurm8L._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31OC2Lurm8L._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/41Ba4enXNgL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Legion Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/317-2itXVzL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">Save on Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/41GfiR4DGjL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 20% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Desktop Lc monitors
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://m.media-amazon.com/images/I/31kWL6FNiSL._AC_SR400,600_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample4"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample4"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-3 ">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Women's clothing</h2>
              <Link className="Categories-Link" to="/womens-dresses">
                See more
              </Link>
            </div>

            <div id="carouselExample5" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenShirt_3868466_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Head phones</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenEthnicWear_3868465_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenTops_3868463_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 80% off</p>
                        <p className="Item_Offer_Dis">Save on cameras</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensMainPage_WomenSports_3868587_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensMainPage_WomenSports_3868587_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Musical instruments
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenPants_3868469_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 30% off</p>
                        <p className="Item_Offer_Dis">Save on Legion Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenLongwear_3868453_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 50% off</p>
                        <p className="Item_Offer_Dis">Save on Laptops</p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenTops_3868463_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">Up to 20% off</p>
                        <p className="Item_Offer_Dis">
                          Save on Desktop Lc monitors
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3 card1 card2 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image"
                      />
                      <div className="card-body">
                        <p className="Item_Offer">EGP 200 and under</p>
                        <p className="Item_Offer_Dis">Save on video games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample5"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample5"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 Category_Items_Carousel" id="Carousel">
            <div className="d-flex">
              <h2 className="Category_Items_Title">Top sale this month</h2>
              <Link to="/laptops" className="Category_Items_Link">
                See more
              </Link>
            </div>

            <div id="carouselExample6" className="carousel slide">
              <div className="carousel-inner">
                <div id="carousel1" className="carousel-item active">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629330_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5637871_200x200_1X._CB588218591_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5637898_200x200_1X._CB588218591_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629372_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629353_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className=" d-flex">
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629353_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629360_200x200_1X._CB587557538_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629319_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5637897_200x200_1X._CB588218591_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                    <div className="card mb-3 card1 Category_Items_Card">
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1577418_5629332_200x200_1X._CB587557764_.jpg"
                        className="card-img-top mx-auto d-block Category_Items_Image Category_Offers_Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample6"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                id="arrows"
                data-bs-target="#carouselExample6"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Content;
