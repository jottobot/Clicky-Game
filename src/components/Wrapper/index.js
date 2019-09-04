import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper" style={{ backgroundImage: `url(${props.backgroundImage})`}}>{props.children}</div>;
}

export default Wrapper;