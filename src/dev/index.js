import React from "react";
import ReactDOM from "react-dom";

import Icons from "../lib/icons";

const App = () => {
  return (
    <>
      <Icons name="google-play" size={300} color="#0f0fff" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
