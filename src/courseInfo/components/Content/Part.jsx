import React from "react";
import PropTypes from "prop-types";

Part.propTypes = {
  parts: PropTypes.object,
};

function Part({ parts }) {
  return (
    <div>
      <p>
        {parts.name}: {parts.exercises}
      </p>
    </div>
  );
}

export default Part;
