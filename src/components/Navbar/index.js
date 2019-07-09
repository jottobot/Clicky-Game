import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Navbar() {
//   return (
//     // navbar
//     <nav className="navbar navbar-expand-lg">
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a href="/">Clicky Game</a>
//           </li>

//           <li className="nav-item guessed">
//             You guessed correctly!
//           </li>

//           <li className="nav-item score">
//             Current score: 0 | Top score: 0
//           </li>

//         </ul>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;

const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/">Clicky Game</a>
      </li>
    </ul>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </nav>
);

export default Navbar;
