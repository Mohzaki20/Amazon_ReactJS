import React, { useEffect, useState } from "react";
import "./filterJewellery.css";
const FilterJewellery = (props) => {
  let [products, setProducts] = useState([]);
  let [brands, setBrands] = useState([]);
  useEffect(() => {
    setProducts(props.products);
    //filter return brandes by api
    let brandByApi = props.products.map((e) => e.brand);
    //result not repetition in brands
    let newBrand = [...new Set(brandByApi)];
    setBrands(newBrand);
  }, [props.products]);

  let productFilter = props.fillterProducts;
  let handleFilter = (event) => {
    if (event.target.checked) {
      let newProduct = products.filter((f) => f.brand === event.target.value);
      props.setFillterProducts([...props.fillterProducts, ...newProduct]);
    } else {
      let newProduct = productFilter.filter(
        (prd) => prd.brand !== event.target.value
      );
      props.setFillterProducts(newProduct);
    }
  };
  let filterByPrice = (event) => {
    if (event.target.value == 39) {
      console.log("oo");
      let price = props.products.filter((product) => product.price <= 39);
      props.setFillterPrdByPrice(price);
    } else if (event.target.value == 69) {
      let price = props.products.filter(
        (product) => product.price >= 40 && product.price <= 69
      );
      props.setFillterPrdByPrice(price);
    } else if (event.target.value == 70) {
      let price = props.products.filter((product) => product.price >= 70);
      props.setFillterPrdByPrice(price);
    }
    // console.log(x);
  };
  return (
    <div className="filter-jewellery">
      <p className="fw-bold mb-0">Brand</p>
      <div className="form-check">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                onClick={(e) => {
                  handleFilter(e);
                }}
              />
              <label className="form-check-label">{brand}</label>
            </div>
          );
        })}
      </div>
      <div className="price mt-3">
        <p className="fw-bold mb-0 ">Price</p>
        <button
          className="btn d-block"
          value={39}
          onClick={(e) => {
            filterByPrice(e);
          }}
        >
          Up to 39 EGP
        </button>

        <button
          className="btn d-block"
          value={69}
          onClick={(e) => {
            filterByPrice(e);
          }}
        >
          40 to 69 EGP
        </button>
        <button
          className="btn d-block"
          value={70}
          onClick={(e) => {
            filterByPrice(e);
          }}
        >
          70 & abover EGP
        </button>
      </div>
    </div>
  );
};

export default FilterJewellery;
