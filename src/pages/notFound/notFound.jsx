import React from "react";
import { Container } from "react-bootstrap";
import "./notFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container className="text-center mt-2 notFound">
      <img
        src="https://m.media-amazon.com/images/G/42/x-locale/common/small-logo._CB658006023_.gif"
        alt=""
        className="mb-3"
      />
      <div className=" d-flex justify-content-center text-start">
        <table>
          <tbody>
            <tr className="table-notFound">
              <td>
                <img
                  src="https://m.media-amazon.com/images/G/42/x-locale/common/kailey-kitty._CB466483591_.gif"
                  alt=""
                />
              </td>
              <td>
                <h4 className="look mb-0">Looking for something?</h4>
                <h5 className=" massage">
                  We're sorry. The Web address you entered is not a functioning
                  page on our site
                </h5>
                <img
                  src="https://m.media-amazon.com/images/G/42/x-locale/common/orange-arrow._CB466292667_.gif"
                  alt=""
                  className=" d-inline"
                />
                <h5 className=" d-inline fw-bold">
                  Go to amazon.eg's
                  <Link className="px-1" to="/">
                    Home
                  </Link>
                  Page
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default NotFound;
