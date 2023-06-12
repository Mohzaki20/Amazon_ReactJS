import React, { useState } from "react";
import "./style.css";
import imgNav from "../../assets/images/XCM_Manual_1550677_5471696_400x39_2X._CB592483028_.jpg";
import flagImg from "../../assets/images/egypt.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function handelMenu() {
    setMenu(!menu);
  }
  return (
    <>
      <div>
        <div className="navBar">
          <ul className="links">
            <li className="all" onClick={handelMenu}>
              <i className="fa-solid fa-bars" /> All
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/laptops">laptops</Link>
            </li>
            <li>
              <Link to="/womens-jewellery">Jewelry</Link>
            </li>
            <li>
              <Link to="/sunglasses">sunglasses</Link>
            </li>
            <li>
              <Link to="/mens-shoes">shoes</Link>
            </li>
            <li>
              <Link to="/mens-shirts">shirts</Link>
            </li>
            <li>
              <Link to="/womens-dresses">dresses</Link>
            </li>
            <li>
              <Link to="/lighting">lighting</Link>
            </li>
            <li>
              <Link to="/smartphones">mobiles</Link>
            </li>
          </ul>
          <img className="img" src={imgNav} />
          <div className="mobile-screen">
            <div className="show-icons">
              <Link href="./index.html">
                <i className="fa-solid fa-house" />
              </Link>
              <Link href="./Sign/Sign.html">
                <i className="fa-solid fa-user" />
              </Link>
              <Link href="./Cart & Pages/card.html">
                <i className="fa-solid fa-cart-shopping" />
              </Link>
            </div>
          </div>
        </div>
        <div className="layout" />
        <div className="menu">
          <span className="x-mark">
            <i
              className="fa-solid fa-xmark fa-2xl"
              style={{ color: "white" }}
            />
          </span>
          <div className="header">
            <div className="info">
              <h3 className="heading">
                <span>
                  <i className="fa-solid fa-circle-user" />{" "}
                </span>
                Hello,{" "}
                <Link href="./Sign/Sign.html" id="signUser">
                  sign in
                </Link>
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>Trending</h4>
            <div>Best selling</div>
            <div>New Releases</div>
            <div>Movers &amp; Sharks</div>
          </div>
          <div className="digital">
            <h4>Digital Content And Devices</h4>
            <div
              className="d-flex align-items-center justify-content-between"
              // style={{
              //   display: "flex",
              //   "-webkit-box-pack": "space-between",
              //   "-webkit-justify-content": "space-between",
              //   "-ms-flex-pack": "space-between",
              //   "justify-content": "space-between",
              //   "-webkit-align-items": "center",
              //   "-webkit-box-align": "center",
              //   "-ms-flex-align": "center",
              //   "align-items": "center",
              // }}
            >
              <span>Amazon Kindle E-readers</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>Shop By Category</h4>
            <Link href="./Cart & Pages/electronics.html">
              <span>Electronics</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/jewelery.html">
              <span>Jewelry</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/man.html">
              <span>Men's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/women.html">
              <span>Women's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
          </div>
          <div className="help">
            <h4>Help &amp; Settings</h4>
            <Link href="./Sign/Sign.html">Your Account</Link>
            <div>
              <i className="fa-solid fa-earth-americas" /> English
            </div>
            <div
              className="d-flex align-items-center "
              // style={{
              //   display: "flex",
              //   "-webkit-align-items": "center",
              //   "-webkit-box-align": "center",
              //   "-ms-flex-align": "center",
              //   "align-items": "center",
              // }}
            >
              <img src={flagImg} style={{ width: "20px" }} />
              <span style={{ marginLeft: "5px" }}>Egypt</span>
            </div>
          </div>
        </div>
      </div>
      {/* start overlay */}
      <div>
        <div
          className="layout"
          style={{ display: menu ? "block" : "none" }}
          onClick={() => setMenu(false)}
        />
        <div className="menu" style={{ left: menu ? "0" : "-400px" }}>
          <span className="x-mark" onClick={() => setMenu(false)}>
            <i
              className="fa-solid fa-xmark fa-2xl"
              style={{ color: "white" }}
            />
          </span>
          <div className="header">
            <div className="info">
              <h3 className="heading">
                <span>
                  <i className="fa-solid fa-circle-user" />{" "}
                </span>
                Hello,{" "}
                <Link href="./Sign/Sign.html" id="signUser">
                  sign in
                </Link>
              </h3>
            </div>
          </div>
          <div className="trending">
            <h4>Trending</h4>
            <div>Best selling</div>
            <div>New Releases</div>
            <div>Movers &amp; Sharks</div>
          </div>
          <div className="digital">
            <h4>Digital Content And Devices</h4>
            <div
              className="d-flex align-items-center justify-content-between"
              // style={{
              //   display: "flex",
              //   "-webkit-box-pack": "space-between",
              //   "-webkit-justify-content": "space-between",
              //   "-ms-flex-pack": "space-between",
              //   "justify-content": "space-between",
              //   "-webkit-align-items": "center",
              //   "-webkit-box-align": "center",
              //   "-ms-flex-align": "center",
              //   "align-items": "center",
              // }}
            >
              <span>Amazon Kindle E-readers</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </div>
          </div>
          <div className="shop">
            <h4>Shop By Category</h4>
            <Link href="./Cart & Pages/electronics.html">
              <span>Electronics</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/jewelery.html">
              <span>Jewelry</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/man.html">
              <span>Men's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
            <Link href="./Cart & Pages/women.html">
              <span>Women's clothing</span>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#777" }}
              />
            </Link>
          </div>
          <div className="help">
            <h4>Help &amp; Settings</h4>
            <Link href="./Sign/Sign.html">Your Account</Link>
            <div>
              <i className="fa-solid fa-earth-americas" /> English
            </div>
            <div
              className="d-flex align-items-center justify-content-between"
              // style={{
              //   display: "flex",
              //   "-webkit-align-items": "center",
              //   "-webkit-box-align": "center",
              //   "-ms-flex-align": "center",
              //   "align-items": "center",
              // }}
            >
              <img src={flagImg} style={{ width: "20px" }} />
              <span style={{ marginLeft: "5px" }}>Egypt</span>
            </div>
          </div>
        </div>
      </div>
      {/* End overlay */}
    </>
  );
}
