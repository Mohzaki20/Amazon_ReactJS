import React from "react";
import "./App.css";
import Laptops from "./pages/laptops/laptops";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productDetails/productDetails";
import { Container } from "react-bootstrap";
import Mobiles from "./pages/mobile/mobiles";
import Lighting from "./pages/lighting/lighting";
import WomenDresses from "./pages/women-dresses/womenDresses";
import Jewellery from "./pages/jewellery/jewellery";
import Shirts from "./pages/shirts/shirts";
import Shoes from "./pages/shoes/shoes";
import Sunglasses from "./pages/sunglasses/sunglasses";
import Sign from "./pages/Sign/Sign";
import Cart from "./pages/cart/cart";
import NotFound from "./pages/notFound/notFound";

import Content from "./components/content/content";

import Register from "./pages/Register/Register";
import RouteLayout from "./pages/RouteLayout/RouteLayout";
function App() {
  return (
    <>
      <Container fluid>
        <Routes>
          <Route element={<RouteLayout />}>
            <Route path="/" element={<Content />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/smartphones" element={<Mobiles />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/womens-dresses" element={<WomenDresses />} />
            <Route path="/womens-jewellery" element={<Jewellery />} />
            <Route path="/mens-shirts" element={<Shirts />} />
            <Route path="/mens-shoes" element={<Shoes />} />
            <Route path="/sunglasses" element={<Sunglasses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/sign" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
