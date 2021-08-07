import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
  course: PropTypes.string,
};

function Header({ course = "" }) {
  return <div>{course}</div>;
}

export default Header;
