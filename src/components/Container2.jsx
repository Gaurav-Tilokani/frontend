import React from "react";
import { Link } from "react-router-dom"
  
const Container2 = () => {
  return (
    <div>
      <h1>Container 2</h1>
      <ul>
        <li>
          <Link to="/">Container1</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Container2;