import React from "react";
import { Link } from "react-router-dom"

const Container3 = () => {
  return (
    <div>
      <h1>Container 3</h1>
      <ul>
        <li>
          <Link to="/">Container1</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Container3;