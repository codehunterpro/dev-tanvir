import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.facebook.com/">
          <BsTwitter />
        </a>
      </div>
      <div>
       <a href="https://www.twitter.com"><BsInstagram /></a> 
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedias;
