import React from "react";
import "./Datetime.css";

export default function Navbar() {
  const date = new Date();
  const weekday = `${date.getDay()}`;
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <div className="datetime-strip">
      <ul>
        <li>
          {dayNames[weekday]}, {today}
        </li>
      </ul>
    </div>
  );
}
