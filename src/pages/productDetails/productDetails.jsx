import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Instance from "../../instanceAxios/instance";
import "./productDetails.css";
import AddToCard from "./addToCart/addToCard";
import Loading from "../../components/loading/loading";

const ProductDetails = () => {
  let [product, setproduct] = useState({});
  let [numberImg, setNumberImg] = useState(0);
  let { id } = useParams();
  let [price, setprice] = useState("");
  useEffect(() => {
    Instance.get(`/${id}`)
      .then((res) => {
        // console.log(res.data);
        setproduct(res.data);
        let price = res.data.price.toString().split("");
        price.splice(2, 0, ",");
        setprice(price.join(""));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(Object.keys(product).length);
  return (
    <div>
      {Object.keys(product).length < 1 ? (
        <Loading />
      ) : (
        <div className="row my-5 details">
          <div className="col-12 col-sm-1  d-none d-lg-block">
            <div className="img-continer mx-lg-2">
              {product.images !== undefined &&
                product.images.map((img, i) => {
                  return (
                    <div className="small-imges mb-2" key={i}>
                      <img
                        src={img}
                        alt="not"
                        onMouseOver={() => {
                          setNumberImg(i);
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-5 col-lg-4 ">
            <div className="h-100">
              {product.images !== undefined && (
                <img
                  src={product.images[numberImg]}
                  alt=""
                  className="w-100  h-100 card-img"
                />
              )}
            </div>
          </div>
          <div className="col-12 col-sm-6  col-md-4 col-lg-5">
            <div className="border-bottom">
              <h3 className="description">{product.description}</h3>
              <p className="brand">Brand: {product.brand}</p>
              <div className="rate">
                <div className="iconstar">
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-chevron-down "></i>
                  <span className="rate-number">{product.rating}</span>
                </div>
              </div>
            </div>
            <div className="border-bottom py-3 ">
              <div className="d-flex">
                <span>EGP</span>
                <h3 className=" fw-bold">{price}0</h3>
                <span>00</span>
              </div>
              <>
                <span className="free">FREE Returns </span>
                <i className="fa-solid fa-chevron-down  "></i>
              </>
              <p className="mb-0">All prices include VAT.</p>
              <p className="mt-0 fw-bold">
                Buy with installments and for 60 months with select banks.
              </p>
              <div className="d-flex featurs">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png"
                    alt=""
                  />
                  <p>Cash on Delivery</p>
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png"
                    alt=""
                  />
                  <p>15 days Returnable</p>
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png"
                    alt=""
                  />
                  <p>Fulfilled by Amazon</p>
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png"
                    alt=""
                  />
                  <p>Secure transaction</p>
                </div>
              </div>
            </div>
            <div className="border-bottom py-3">
              <table>
                <tbody>
                  <tr>
                    <th>Brand </th>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <th>category</th>
                    <td> {product.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border-bottom py-3">
              <h5 className="mb-0">About this item</h5>
              <ul>
                <li>{product.title}</li>
                <li>Brand Generic</li>
                <li>Material good</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-2 ">
            <AddToCard product={product} price={price} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
