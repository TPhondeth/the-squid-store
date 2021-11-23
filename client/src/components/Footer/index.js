import React from "react";
import "./index.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";

const index = () => {
  return (
    <div className="footer ">
          
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
                url={"https://www.linkedin.com"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
              <LinkedinIcon className="mx-3" size={36} />
            </LinkedinShareButton>
            
    </div>
  );
};

export default index;
