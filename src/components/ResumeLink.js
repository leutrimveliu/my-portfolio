import React from "react";
import { Link } from "react-router-dom";

const ResumeLink = ({ reference, click }) => {
  return (
    <li className="nav-item" ref={reference}>
      <Link
        className="nav-links"
        //   onClick={(closeMobileMenu)}
        onClick={click}
      >
        Resume
      </Link>
    </li>
  );
};

export default ResumeLink;
