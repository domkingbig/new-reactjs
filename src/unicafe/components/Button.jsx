import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
};

function Button({ value, handleClick }) {
  const handleButtonClick = () => {
    if (!handleClick) return;
    handleClick(handleClick);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>{value}</button>
    </div>
  );
}

export default Button;
