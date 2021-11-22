import React from "react";
import "./index.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LineShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Team Squid Squad</p>
            </div>

            <div className="d-flex">
              <p>storesquid866@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3.col-md-2.col-sm-6 ftr">
            <div className="row">
              <div className="col">
                <Link to="/">
                  <a className="footer-nav">Home</a>
                  <br />
                </Link>
                <Link to="/signup">
                  <a className="footer-nav">Sign up</a>
                </Link>
              </div>

              <div className="col">
                <Link to="/login">
                  <a className="footer-nav">Login</a>
                </Link>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/profile.php?id=100075389520028"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              {/*  */}
              <TwitterShareButton
                url={"https://twitter.com/SquidSq93709257"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              {/*  */}
              <LinkedinShareButton
                // url={"https://www.linkedin.com/in/amal-lohith-921a16101/"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              {/*  */}
            </div>
            <div className="pt-3 text-center">
              Copright&copy;
              {new Date().getFullYear()}&nbsp;Squid Store| All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
