import React from "react";
import PropTypes from "prop-types";
import Part from "./Part";
Content.propTypes = {
  parts: PropTypes.array,
};

function Content({ parts }) {
  return (
    <>
      <Part parts={parts[0]} />
      <Part parts={parts[1]} />
      <Part parts={parts[2]} />
    </>
  );
}

export default Content;
