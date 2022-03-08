import React from "react";
import "./Radio.css";

const Radio = ({ question, options, value, id, onChange, active }) => {
  if (active === false) return null;
  return (
    <div className="container">
      <p>{question}</p>
      {options.map((option) => (
        <label key={id}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
          <span class="check"></span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
