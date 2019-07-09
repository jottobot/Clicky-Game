import React from "react";
import "./style.css";

// function pictures(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//     </div>
//   );
// }

// export default pictures;


const pictures = props => (
  <div className="card" onClick={() => props.clicks(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default pictures;