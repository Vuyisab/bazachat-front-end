import React from "react";
import "./Side.css";
import { BrowserRouter as Router,Navlink } from "react-router-dom";

export const Side = () => {
  return (
    <ul className="Side">
      <li>
        <span class="material-symbols-outlined">house</span>
        Home
      </li>
      <li>
        <span class="material-symbols-outlined">school</span> Assessments
      </li>
      <li>
        <span class="material-symbols-outlined">rate_review</span> Review
      </li>
      <li>
        <span class="material-symbols-outlined">bar_chart</span> Analytics
      </li>
      <li>
        <span class="material-symbols-outlined">forum</span> Discussions
      </li>
      <li>
        <span class="material-symbols-outlined">diversity_3</span> Friends
      </li>
      <li>
        <span class="material-symbols-outlined">military_tech</span> Rankings
      </li>
    </ul>
  );
};
