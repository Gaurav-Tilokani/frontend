import React from "react";
import { Link } from "react-router-dom";
  
const Container1 = () => {
  return (
    <div>
      <h1>Container1</h1>
      <br />
      <ul>
        <li>
          <Link to="/">Container1</Link>
        </li>
        <li>
          <Link to="/container2">Container2</Link>
        </li>
        <li>
          <Link to="/container3">Container3</Link>
        </li>
        <li>
          <Link to="/container4">Container4</Link>
        </li>
        <li>
          <Link to="/container5">Container5</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Container1;