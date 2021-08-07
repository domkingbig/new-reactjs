import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

Unicafe.propTypes = {};

function Unicafe(props) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [points, setPoints] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleGoodClick = () => {
    const newGood = good;
    setGood(newGood + 1);
    const newPoints = points;
    setPoints(newPoints + 1);
    setFlag(true);
  };

  const handleNeutralClick = () => {
    const newNeutral = neutral;
    setNeutral(newNeutral + 1);
    const newPoints = points;
    setPoints(newPoints);
    setFlag(true);
  };

  const handleBadClick = () => {
    const newBad = bad;
    setBad(newBad + 1);
    const newPoints = points;
    setPoints(newPoints - 1);
    setFlag(true);
  };
  const data = [
    {
      id: 1,
      name: "good",
      value: good,
    },
    {
      id: 2,
      name: "neutral",
      value: neutral,
    },
    {
      id: 3,
      name: "bad",
      value: bad,
    },
  ];
  return (
    <div>
      <h2>Give feedback</h2>

      <Button handleClick={handleGoodClick} value="good" />

      <Button handleClick={handleNeutralClick} value="neutral" />

      <Button handleClick={handleBadClick} value="bad" />

      <h2>statistic</h2>

      {flag === true ? (
        <Statistics data={data} points={points} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default Unicafe;
