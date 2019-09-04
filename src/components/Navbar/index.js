import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="scores"> Score: {props.score}</div> 
      <div className="hint navbar">{props.hint}</div>
      <div className="scores2"> Highscore: {props.highscore}</div>
    </nav>
  );
};


export default Navbar;
