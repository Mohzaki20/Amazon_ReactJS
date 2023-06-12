import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import { Container } from "react-bootstrap";
import "./jewellery.css";

import Collapse from "react-bootstrap/Collapse";
import FilterJewellery from "./filterJewellery/filterJewellery";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import Product from "../../components/product/product";

const Jewellery = () => {
  //store the all product by get api
  const [products, setProducts] = useState([]);
  //result fillter data by brand name
  const [fillterProducts, setFillterProducts] = useState([]);
  //result fillter data by price
  const [fillterPrdByPrice, setFillterPrdByPrice] = useState([]);
  // result all products by filter
  // const [allPrdFilter, setallPrdFilter] = useState([]);

  //original data get by api send filter show data in screen
  const [productsOrginal, setProductsOrginal] = useState([]);
  //collapse in screen mobiles
  const [open, setOpen] = useState(false);
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    Instance.get("/category/womens-jewellery")
      .then((res) => {
        setProductsOrginal(res.data.products);
        if (fillterProducts.length >= 1 || fillterPrdByPrice.length >= 1) {
          let allPrdFilter = [...fillterProducts, ...fillterPrdByPrice];
          const allPrdNotRepetition = [
            ...new Map(allPrdFilter.map((m) => [m.id, m])).values(),
          ];
          // console.log(allPrdFilter);
          // console.log(allPrdFilter.map((m) => [m.id, m]));
          // console.log(...new Map(allPrdFilter.map((m) => [m.id, m])).values());
          setProducts(allPrdNotRepetition);
        } else {
          setProducts(res.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fillterPrdByPrice, fillterProducts]);

  return (
    <Container fluid>
      <div className="row my-5 laptop">
        <div className="col-12 col-md-2 content-filter">
          <div className="d-none d-md-block ">
            <FilterJewellery
              fillterProducts={fillterProducts}
              setFillterProducts={setFillterProducts}
              products={productsOrginal}
              setFillterPrdByPrice={setFillterPrdByPrice}
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
                  <FilterJewellery
                    fillterProducts={fillterProducts}
                    setFillterProducts={setFillterProducts}
                    products={productsOrginal}
                    setFillterPrdByPrice={setFillterPrdByPrice}
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

export default Jewellery;
