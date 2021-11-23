import React from "react";
import "./index.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton
} from "react-share";

const index = () => {
  return (
    <div className="footer ">
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
                url={"https://www.linkedin.com"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
              <LinkedinIcon className="mx-3" size={36} />
            </LinkedinShareButton>

            <RedditShareButton
                url={"https://www.reddit.com/"}
                quote={"FullStack Developer"}
                hashtag="#MERN Stack Developer"
              >
              <RedditIcon className="mx-3" size={36} />
            </RedditShareButton>
          </div>
    </div>
  );
};

export default index;
