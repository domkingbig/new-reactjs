import React from "react";
import PropTypes from "prop-types";

Statistics.propTypes = {
  data: PropTypes.array,
  points: PropTypes.any,
};

function Statistics({ data, points }) {
  const allValue = data[0].value + data[1].value + data[2].value;

  return (
    <table>
      <tbody>
        <tr>
          <td>{data[0].name}:</td>
          <td>{data[0].value}</td>
        </tr>
        <tr>
          <td>{data[1].name}:</td>
          <td>{data[1].value}</td>
        </tr>
        <tr>
          <td>{data[2].name}:</td>
          <td>{data[2].value}</td>
        </tr>
        <tr>
          <td>all:</td>
          <td>{allValue}</td>
        </tr>
        <tr>
          <td>average:</td>
          <td>{points / allValue}</td>
        </tr>
        <tr>
          <td>positive:</td>
          <td>{(data[0].value / allValue) * 100}%</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Statistics;
