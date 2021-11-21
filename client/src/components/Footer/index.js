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

const index = () => {
  return (
    <div className="footer">
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
          <div className="col-lg-3.col-md-2.col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
              </div>
              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact Me</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                // url={"https://www.facebook.com/"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              {/*  */}
              <TwitterShareButton
                // url={"https://twitter.com/home"}
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
