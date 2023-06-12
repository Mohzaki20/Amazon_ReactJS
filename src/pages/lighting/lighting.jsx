import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./lighting.css";
import { useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import FilterLighting from "./filterLighting/filterLighting";
import Product from "../../components/product/product";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";

const Lighting = () => {
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
    Instance.get("/category/lighting")
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
            <FilterLighting
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
                  <FilterLighting
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
              heightCart={550}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Lighting;
