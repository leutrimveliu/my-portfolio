import React from "react";

import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer  d-flex flex-column justify-content-center">
      <div className="buttons p-2 align-self-center">
        {" "}
        <GitHubIcon
          style={{ color: " white", fontSize: 85, paddingRight: 40 }}
          className="git icons"
          cursor="pointer"
          onClick={(event) =>
            window.open("https://github.com/leutrimveliu", "_blank")
          }
        />
        <FacebookIcon
          className="fb icons"
          style={{ color: "white", fontSize: 85, paddingRight: 40 }}
          cursor="pointer"
          onClick={(event) =>
            window.open("https://www.facebook.com/LeutrimFVeliu/", "_blank")
          }
        />
        <LinkedInIcon
          className="icons"
          style={{ color: "white", fontSize: 85, paddingRight: 40 }}
          cursor="pointer"
          onClick={(event) =>
            window.open("https://www.linkedin.com/in/leutrim-veliu/", "_blank")
          }
        />
      </div>
      <div className="credits p-2 align-self-center">
        <li>&copy; All credit goes to Leutrim Veliu - Copyright 2020</li>
      </div>
    </div>
  );
};
export default Footer;
