import React from "react";
import Anecdotes from "./anecdotes";
import CourseInfo from "./courseInfo";
import Unicafe from "./unicafe";

const App = () => {
  return (
    <div>
      <CourseInfo />
      <Unicafe />
      <Anecdotes />
    </div>
  );
};

export default App;
