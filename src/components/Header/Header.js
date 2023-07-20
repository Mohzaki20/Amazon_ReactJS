import React, { useState } from "react";

import "./Header.css";

import axios from "axios";

// import { useRef } from "react";

import { useEffect } from "react";

// import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images header/Amazon-Emblem.jpg";

import location from "../../assets/images header/location.png";
import egypt from "../../assets/images header/downloadlan.png";
import cartImg from "../../assets/images header/cart3.png";
import cartImg2 from "../../assets/images header/cart.png";

import searchImg from "../../assets/images header/search.png";

export default function Header() {
  const navigate = useNavigate();

  let allProduct = useSelector((state) => state.cart.cart);

  // console.log(allProduct.length);

  const [signInisShown, setsignInIsShown] = useState(false);

  const [langisShown, setlangisShown] = useState(false);

  const [searchIsShown, setSearchIsShown] = useState(false);

  const [query, setquery] = useState("");

  const [resultSearch, setResultSearch] = useState([]);

  const [lang, setlang] = useState("en");

  function handelsearchshow() {
    setSearchIsShown(!searchIsShown);
  }

  function handelsigninshow() {
    setsignInIsShown(!signInisShown);
  }

  function handellangshow() {
    setlangisShown(!langisShown);
  }

  const search = () => {
    if (query === "") {
      console.log("nothing to show");
    } else {
      axios

        .get(`https://dummyjson.com/products/search?q=${query}`)

        .then((res) => {
          setResultSearch(res.data.products);

          // console.log(res.data.products);
        })

        .catch((err) => console.log(err));
    }
  };

  const handlesearch = (e) => {
    if (e.target.value === "") {
      setquery(e.target.value);

      setResultSearch([]);

      search();
    } else {
      setquery(e.target.value);

      search();
    }
  };

  useEffect(() => { }, [resultSearch]);

  function handleLang(event) {
    setlang(event.target.value);
  }

  const navigateToProdcut = (cat) => {
    var arr = [
      "womens-jewellery",
      "laptops",
      "lighting",
      "smartphones",
      "mens-shirts",
      "mens-shoes",
      "sunglasses",
      "womens-dresses",
    ];

    setSearchIsShown(false);

    if (arr.includes(cat)) {
      navigate(`/${cat}`);

      handelsearchshow();
    } else {
      console.log("not found");
    }
  };

  return (
    <>
      <div
        className="container-fliud"

      // dir={lang==='en'?'ltr':'rtl'}
      >
        <nav className="navheader">
          <div id="left-nav">
            <div style={{ width: "60%", height: "70%" }}>
              <a href="/" className="px-1">
                <img src={logo} alt="logo" width="90%" height="80%" />
              </a>
            </div>

            <div className="locationdiv">
              <a href="/">
                <div className=" d-flex  flex-nowrap">
                  <div
                    className="col-4 p-0 d-flex align-items-end"
                    style={
                      {
                        // width: "30%",
                      }
                    }
                  >
                    <img
                      src={location}
                      width="100%"
                      height="65%"
                      alt="logo"
                      style={{ paddingBottom: "7%" }}
                    />
                  </div>

                  <div className="col-8 px-0">
                    <div className="headertextloc m-0 p-0">Deliver to </div>

                    <div className="headertextloc2 m-0 p-0 pe-2  ">Egypt</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div id="mobilediv">
            <a className="mobile-signinIcon" href="/">
              <span>sign in</span>
            </a>

            <i className="usericon  fa-solid fa-user"></i>

            <a href="/">
              <img src={cartImg2} alt="" />
            </a>
          </div>

          <div className="navsearch">
            <button className="book">All </button>

            <input
              id="searchInput"
              type="search"
              style={{ paddingLeft: "2%" }}
              onChange={handlesearch}
              value={query}
              name="search"
              autoComplete="off"
              placeholder=" Search Amazon"
              data-search
              onFocus={handelsearchshow}

            // onBlur={handelsearchshow}
            />

            <button className="search" type="submit" onClick={search}>
              <img src={searchImg} width="50%" alt="" />
            </button>
          </div>

          <div id="logo3">
            <button
              type="button"
              className="btn btn-secondary w-100 h-100"
              style={{ backgroundColor: "gray", width: "98%", height: "100%" }}
            >
              <div className="d-flex" style={{ display: "flex" }}>
                <div className="row">
                  {" "}
                  <img
                    src={location}
                    width="100%"
                    height="40%"
                    alt="logo"
                    style={{ verticalAlign: "inherit" }}
                  />
                </div>

                <div> Deliver to Egypt </div>
              </div>
            </button>
          </div>

          <div id="right-nav">
            <ul>
              <li
                style={{ width: "15%" }}
                onMouseEnter={() => {
                  setlangisShown(true);
                }}
                onMouseLeave={handellangshow}
              >
                <a className="langarrow" href="/" style={{ alignItems: "end" }}>
                  <img src={egypt} alt="" />

                  <div>
                    <span id="spanarrow" className="pe-1">
                      EN
                    </span>
                  </div>
                </a>
              </li>

              <li
                style={{ width: "30%" }}
                onMouseEnter={() => {
                  setsignInIsShown(true);
                }}
                onMouseLeave={handelsigninshow}
              >
                <a href="/" id="signinarrow">
                  <div>sign in</div>

                  <span id="signarrow">Account&Lists</span>
                </a>
              </li>

              <li>
                <a href="/">
                  <div>Returns</div>

                  <span>&Orders</span>
                </a>
              </li>

              <li className=" position-relative">
                <Link to="/cart" className="d-flex">
                  <img src={cartImg} alt="" className="navCartImage" />

                  <span style={{ paddingTop: "8%", fontSize: "1.1vw" }}>
                    cart
                  </span>

                  <div className="cartItemNum">{allProduct.length}</div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div>
        {" "}
        <div
          className="overlay"
          style={{ display: langisShown ? "block" : "none" }}
        />
        <span
          id="spanlang"
          style={{ top: langisShown ? "6.3%" : "-100%" }}
          onMouseEnter={() => setlangisShown(true)}
          onMouseLeave={handellangshow}
        ></span>
        <div
          style={{ display: langisShown ? "block" : "none" }}
          id="divlangitem"
          onMouseEnter={() => setlangisShown(true)}
          onMouseLeave={handellangshow}
        >
          <div className="langselect">
            change language{" "}
            <a href="/" style={{ fontSize: "0.8vw" }}>
              learn more
            </a>{" "}
          </div>

          <div className="langselect">
            <input
              className="form-check-input m-0"
              type="radio"
              id="flexRadioDefault1"
              //checked={() => setlang("en")}
              //value="en"
              //onChange={handleLang}

              defaultChecked
            />

            <label>english - EN</label>
          </div>

          <hr />

          <div className="langselect">
            <input
              className="form-check-input m-0"
              type="radio"
              id="flexRadioDefault1"
            //checked={() => setlang("ar")}
            //value="ar"
            //onChange={handleLang}

            // onChange={change}
            />

            <label>العربية -AR</label>
          </div>

          <hr />

          <div>
            Change currency <a href="/">Learn more</a>
          </div>

          <div>$ - USD - US Dollar</div>
        </div>
      </div>

      <div>
        <div
          className="overlay"
          style={{ display: signInisShown ? "block" : "none" }}
        />
        <span
          id="div-sign-arrow"
          style={{ top: signInisShown ? "6.2%" : "-100%" }}
          onMouseEnter={() => setsignInIsShown(true)}
          onMouseLeave={handelsigninshow}
        ></span>{" "}
        <div
          style={{ display: signInisShown ? "block" : "none" }}
          id="div-sign-tem"
          onMouseEnter={() => setsignInIsShown(true)}
          onMouseLeave={handelsigninshow}
        >
          <div className="row d-flex justify-content-center flex-row flex-wrap m-0">
            <div className="col-10 d-flex justify-content-center ">
              <button type="button" className="btn btn-warning w-50 mt-3 ">
                <Link to="./sign">sign in</Link>{" "}
              </button>
            </div>

            <div className="registerlink col-10 justify-content-center border-bottom py-2 d-flex">
              {" "}
              New customer?
              <a
                href="./Registration/Registertion.html"
                className="px-2 text-decoration-none"
              >
                {" "}
                Start here.
              </a>{" "}
            </div>
          </div>

          <div className="row pt-2" style={{ display: "flex" }}>
            <div
              className="col-6 border-end"
              id="listofsign"
              style={{ width: "50%" }}
            >
              <h5>your lists</h5>

              <div>
                <a href="/"> Create a List</a>
              </div>

              <div>
                <a href="/">Find a List or Registry</a>
              </div>
            </div>

            <div className="col-6 " id="listofsign" style={{ width: "50%" }}>
              <h5>your account</h5>

              <div>
                {" "}
                <a href="/">AccountOrders</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Recommendations</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Browsing History</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Watchlist</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Video Purchases & Rentals </a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Kindle Unlimited</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Content & Devices</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Subscribe & Save Items</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Memberships & Subscriptions</a>{" "}
              </div>

              <div>
                {" "}
                <a href="/">Music Library </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="overlay"
          style={{ display: searchIsShown ? "block" : "none" }}
          onClick={() => setSearchIsShown(false)}
        />

        <div
          style={{ display: searchIsShown ? "block" : "none" }}
          //  onClick={() => setSearchIsShown(true)}

          id="searchResults"
        >
          {" "}
          {resultSearch.map((res) => {
            return (
              <div
                className="list"
                // onClick={() => {

                //   console.log(res.category);}}

                onClick={() => {
                  navigateToProdcut(res.category);
                }}
                key={res.id}
              >
                <div className="imgsearch">
                  <img
                    className="m-1"
                    src={res.images[0]}
                    alt=""
                    width={"70%"}
                    height={"70%"}
                  />
                </div>

                <div className="listsearchtext ">
                  <h6 className="m-0 p-0">{res.title}</h6>

                  <p className="m-0 p-0">{res.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
