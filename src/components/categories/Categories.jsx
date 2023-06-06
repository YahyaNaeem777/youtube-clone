import React, { useState } from "react";
import "./Categories.scss";

const keywords = [
  "All",
  "ReactJs",
  "AngularJs",
  "React Native",
  "Use of Api",
  "Redux",
  "Music",
  "Algorithm",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Footbal",
  "Real Madrik",
  "Gatsbay",
  "poor Coder",
  "ShweTabh",
];

const Categories = () => {
  const [activeElement, setActiveElement] = useState("All");
  console.log(activeElement);

  const handleClick = (value) => setActiveElement(value);

  return (
    <div className="categoriesBar">
      {keywords.map((values, index) => (
        <span key={index} onClick={() => handleClick(values)} className={activeElement === values ?"active":""}>
          {values}
        </span>
      ))}
    </div>
  );
};

export default Categories;
