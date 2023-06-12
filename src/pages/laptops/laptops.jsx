import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import { Container } from "react-bootstrap";

import "./laptops.css";

import FilterLaptop from "./filterLaptop/filterLaptop";
import "./filterLaptop/filterLaptop.css";

import Collapse from "react-bootstrap/Collapse";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import Product from "../../components/product/product";

const Laptops = () => {
  //store the all product by get api
  const [products, setProducts] = useState([]);
  //result fillter data
  const [fillterProducts, setFillterProducts] = useState([]);
  //original data get by api send filter show data in screen
  const [productsOrginal, setProductsOrginal] = useState([]);
  //collapse in screen mobile
  const [open, setOpen] = useState(false);

  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    Instance.get("/category/laptops")
      .then((res) => {
        setProductsOrginal(res.data.products);
        if (fillterProducts.length >= 1) {
          setProducts(fillterProducts);
        } else {
          setProducts(res.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fillterProducts]);
  return (
    <Container fluid>
      <div className="row my-5 laptop">
        <div className="col-12 col-md-2 content-filter">
          <div className="d-none d-md-block ">
            <FilterLaptop
              fillterProducts={fillterProducts}
              setFillterProducts={setFillterProducts}
              products={productsOrginal}
            />
          </div>

          <div className="mb-3 d-md-none">
            <button
              className=" w-100 btn-collapse"
              onClick={() => setOpen(!open)}
            >
              Fillter
            </button>
            <Collapse in={open}>
              <div id="example-collapse-text ">
                <div className="ms-3">
                  <FilterLaptop
                    fillterProducts={fillterProducts}
                    setFillterProducts={setFillterProducts}
                    products={productsOrginal}
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className="col-12 col-md-10">
          {loading ? (
            <Loading />
          ) : (
            <Product
              products={products}
              fillterProducts={fillterProducts}
              heightCart={535}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Laptops;
