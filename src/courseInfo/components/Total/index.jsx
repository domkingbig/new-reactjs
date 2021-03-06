import React from "react";
import PropTypes from "prop-types";

Total.propTypes = {
  parts: PropTypes.array,
};

function Total({ parts }) {
  return (
    <div>
      Number of exercises:
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </div>
  );
}

export default Total;
