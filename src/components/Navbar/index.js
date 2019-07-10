import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg">
      {/* <div className="title">{props.title}</div> */}
      <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
      </div>
    </nav>
  );
}

export default Navbar;
