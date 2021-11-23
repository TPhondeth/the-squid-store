import React from "react";
import "./index.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <div className="pt-3 text-center">
                <FacebookShareButton
                    url={"https://www.facebook.com/profile.php?id=100075389520028"}
                    quote={"FullStack Developer"}
                    hashtag="#MERN Stack Developer"
                  >
                  <FacebookIcon className="mx-3" size={36} />
                </FacebookShareButton>
  
                <TwitterShareButton
                    url={"https://twitter.com/SquidSq93709257"}
                    quote={"FullStack Developer"}
                    hashtag="#MERN Stack Developer"
                  >
                  <TwitterIcon className="mx-3" size={36} />
                </TwitterShareButton>
              
                <LinkedinShareButton
                    // url={"https://www.linkedin.com/in/"}
                    quote={"FullStack Developer"}
                    hashtag="#MERN Stack Developer"
                  >
                  <LinkedinIcon className="mx-3" size={36} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
              <div className="copyright">
                  Copyright&copy;
                  {new Date().getFullYear()}&nbsp;Squid Store
              </div>
        </div>
      </div>
    </div>
  );
};

export default index;
