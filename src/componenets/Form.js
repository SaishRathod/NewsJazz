import React, { useState } from "react";

export default function Form() {
  const check = (text) => {
    if (!text) {
      alert("Please enter course details before hitting submit");
    }
  };

  const [text, setText] = useState(null);
  console.log(text);

  const handleClick = () => {
    alert("Recheck your course details: \n" + text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class="mb-3">
      <h2>Enter course details:</h2>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        onChange={handleChange}
      ></textarea>
      <center>
        <button
          name="btn"
          onClick={handleClick}
          onMouseEnter={() => check(text)}
          disabled={text ? false : true}
        >
          Submit
        </button>
      </center>
    </div>
  );
}
