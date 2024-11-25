import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FontAwesomeIcon icon={faInstagram} />

        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="copyright">Copyright © 2024</div>
    </div>
  );
};

export default Footer;
