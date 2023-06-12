import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import "./cart.css";
import { changeCart } from "../../storeByRedux/action/changeCart";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Swal from "sweetalert2";
const Cart = () => {
  let [product, setProduct] = useState([]);
  let allProduct = useSelector((state) => state.cart.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItem, setTotalItem] = useState(0);
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    let filter = product.filter((prd) => prd.id !== id);
    console.log(filter);
    dispatch(changeCart([...filter]));
  };
  let changeQuantity = (e, id) => {
    console.log(parseInt(e.target.value));
    let newListCart = product.map((ele) => {
      if (ele.id === id) {
        ele.stock = ele.stock + ele.order;
        ele.order = parseInt(e.target.value);
        ele.stock = ele.stock - ele.order;
        return ele;
      }
      return ele;
    });
    dispatch(changeCart(newListCart));
    console.log(newListCart);
  };
  useEffect(() => {
    setProduct(allProduct);
    if (product.length > 0) {
      let item = product
        .map((x) => x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalItem(item);
      let price = product
        .map((x) => x.price * x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalPrice(price);
    }
  }, [handleDelete]);
  return (
    <div>
      <div className="row shop-cart p-3 ">
        <div className="col-12 col-lg-9  ">
          {product.length >= 1 ? (
            <div className="px-3 py-4 Shopping-Cart mb-3">
              <div className="d-flex justify-content-between text">
                <h3>Shopping Cart</h3>
                <span className=" d-none d-md-block">price</span>
              </div>
              {product.map((prd) => {
                return (
                  <div className="row py-2 contant" key={prd.id}>
                    <div className="col-12 col-sm-3 col-md-2 ">
                      <img src={prd.thumbnail} className="h-100 w-100" />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8">
                      <h5 className="m-0   overflow-hidden">
                        {prd.description}
                      </h5>
                      <span className="stock">Instock</span>
                      <p className="delivert m-0">Eligible for FREE delivery</p>
                      <div className="d-flex flex-wrap  select-menu">
                        <div className="d-flex  align-items-center ">
                          <span>Qty:</span>
                          <Form.Select
                            onChange={(e) => {
                              changeQuantity(e, prd.id);
                            }}
                            value={prd.order}
                            className="py-1 mx-1 "
                            // style={{ width: "70px" }}
                            aria-label="Default select example"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </Form.Select>
                        </div>
                        <button
                          className="btn"
                          onClick={() => handleDelete(prd.id)}
                        >
                          Delete
                        </button>
                        <button className="btn">save for later</button>
                        <button className="btn">share</button>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <h5 className="text-end fw-bold">EGP {prd.price}.00</h5>
                    </div>
                  </div>
                );
              })}
              <h5 className="text-start text-md-end">
                Subtotal ({totalItem} items):
                <span className="fw-bold">EGP {totalPrice}.00</span>{" "}
              </h5>
            </div>
          ) : (
            <div className="empty p-3 mb-3">
              <h3 className="text-center text-md-start pb-3">
                Your Amazon Cart is empty.
              </h3>
              <p className="text-danger text-center py-3">Shoping Now</p>
              <h5 className="text-center text-md-end">
                Subtotal (0 items):
                <span className="fw-bold">EGP 0.00</span>{" "}
              </h5>
            </div>
          )}{" "}
          <div className="box mb-2"></div>
          <div className="text my-3">
            <p>
              The price and availability of items at amazon.eg are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price.
            </p>
            <p>
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-3  ">
          {product.length > 0 && (
            <div className="features p-3 mb-3">
              <div className="main-color">
                <IoCheckmarkCircleSharp />
                <span>
                  Your order qualifies for FREE Shipping Choose this option at
                  checkout. See details
                </span>
              </div>
              <h5 className="">
                Subtotal ({totalItem} items):
                <span className=""> EGP {totalPrice}.00</span>{" "}
              </h5>
              <button className="tobuy w-100">Proceed to Buy</button>
            </div>
          )}
          <div className="best-sales  p-3 d-none d-lg-block">
            <h5>
              Frequently bought with Samsung Galaxy A04e Dual SIM - 3GB RAM,
              32GB Stora...
            </h5>
            <div className="row contant">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/81HjL17oavL._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                  Samsung Galaxy A04e Dual SIM Smartphone
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">EGP 3,699.00</p>
                <button className="btn-add-cart btn">Add to Cart</button>
              </div>
            </div>
            <div className="row contant mt-2">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/61glUkL9N8L._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                  G2000 Gaming Headset, Surround Stereo Gaming Headphones with
                  Noise Cancelling Mic,
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">EGP 1,299.00</p>
                <button className="btn-add-cart btn">Add to Cart</button>
              </div>
            </div>
            <div className="row contant mt-2">
              <div className="col-4 p-0">
                <img
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/I/81ejU1gSrxL._AC_UL200_SR200,200_.jpg"
                  }
                  className="w-100 h-100"
                  alt=""
                />
              </div>
              <div className="col-8 p-0">
                <p className="main-color fw-bold">
                  Nokia C10 Android Smartphone, Dual Sim, 2GB RAM, 32GB Memory
                </p>
                <div className="rate">
                  <div className="iconstar">
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="rate-number">8</span>
                  </div>
                </div>
                <p className="text-danger fw-bold">EGP 1,299.00</p>
                <button className="btn-add-cart btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cart;
