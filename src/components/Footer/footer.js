import "./footer.css";
import logo from "../../assets/images header/amazonlogo3.jpg";
import egypt from "../../assets/images header/downloadlan.png";
const Footer = () => {
  return (
    <>
      <button className="back">Back to top</button>
      <footer id="footer1">
        <div className="f1section1">
          <div className="col1">
            <h5>Get to know us</h5>
            <a href="/">careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devicse</a>
          </div>

          <div className="col3">
            <h5>Amazon Payment Products</h5>
            <a href="/">Amazon Business Card</a>
            <a href="/">Shop with Points</a>
            <a href="/">Reload Your Balance</a>
            <a href="/">Amazon Currency Converter</a>
          </div>
          <div className="col2">
            <h5>Make Mony with Us </h5>
            <a href="/">Sell Products on Amazon</a>
            <a href="/">Sell on Amazon Business</a>
            <a href="/">Sell apps on Amazon</a>
            <a href="/">Become an Affiliate</a>
            <a href="/">Advertise Your Products</a>
            <a href="/">Self-Publish with Us</a>
            <a href="/">Host an Amazon Hub</a>
          </div>

          <div className="col4">
            <h5>Let Us Help You</h5>
            <a href="/">Amazon and COVID-19</a>
            <a href="/">Your Account</a>
            <a href="/">Your Orders</a>
            <a href="/">Shipping Rates & Policies</a>
            <a href="/">Returns & Replacmenta</a>
            <a href="/">Help</a>
          </div>
        </div>
        <div>
          <nav className="navfooter1">
            <div id="secondlogo" style={{ fontSize: "1.1vw" }}>
              <a href="/" className="logo1">
                {" "}
              </a>
              <a href="/">
                {" "}
                <img src={logo} alt="logo" width="100px" />
              </a>
              <div>
                <a href="/" style={{ alignItems: "center" }}>
                  <span style={{ paddingLeft: "5px" }}>English</span>{" "}
                </a>

                <a href="/">
                  <img src={egypt} alt="" width="6%" />
                  <div className="d-inline ml-1">
                    <span>Egypt</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <footer id="footer2">
        <div className="f2section1" style={{ paddingTop: "20px" }}>
          <table className="fTable">
            <tbody>
              <tr className="table-footer">
                <td>
                  {" "}
                  <a href="/">
                    <span> Amazon Music</span>Stream millions of songs
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Amazon Advertising</span>Find, attract, and engage
                    customers
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>6pm</span> Score deals on fashion brands
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>AbeBooks</span> Books, art & collectibles
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>ACX</span>Audiobook Publishing Made Easy
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Sell on Amazon</span>Start a Selling Account
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Amazon Business</span>Everything For Your Business
                  </a>
                </td>
              </tr>
              <tr className="table-footer">
                <td>
                  {" "}
                  <a href="/">
                    <span>AmazonGlobal</span> Ship Orders Internationally
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Home Services</span>Experienced Pros Happiness
                    Guarantee
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Amazon Ignite</span>Sell your original Digital
                    Educational Resources
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Amazon Web Services</span> Scalable Cloud Computing
                    Services
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Audible</span>Listen to Books & Original Audio
                    Performances
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span> Book Depository</span>Books With Free Delivery
                    Worldwide
                  </a>
                </td>
                <td>
                  <a href="/">
                    <span>Box Office Mojo</span>Find Movie Box Office Data
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="endfooter">
          <div id="endfooterlinks">
            <a href="/">Conditions of Use </a>
            <a href="/">Privacy Notice</a>
            <a href="/">Your Ads Privacy Choices</a>
          </div>
          <div>
            <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
