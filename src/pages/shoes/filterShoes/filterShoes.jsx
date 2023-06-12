import React, { useEffect, useState } from "react";
const FilterShoes = (props) => {
  let [products, setProducts] = useState([]);
  let [brands, setBrands] = useState([]);
  useEffect(() => {
    setProducts(props.products);
    //filter return brandes by api
    let brandByApi = props.products.map((e, i) => e.brand);
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
  return (
    <div>
      <p className="fw-bold">Brand</p>
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
    </div>
  );
};

export default FilterShoes;
