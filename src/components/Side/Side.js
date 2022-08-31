import React from "react";
import "./Side.css";
import { BrowserRouter as Router,NavLink} from "react-router-dom";


export const Side = () => {
  return (
    <ul className="Side">
      <li>
        <NavLink exact to="/feed">
        <span class="material-symbols-outlined">house</span>
        Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/">
        <span class="material-symbols-outlined">school</span> Assessments
        </NavLink>
        
      </li>
      <li>
        <NavLink exact to="/">
        <span class="material-symbols-outlined">rate_review</span> Review
        </NavLink>
        
      </li>
      <li>
        <NavLink exact to="/">
        <span class="material-symbols-outlined">bar_chart</span> Analytics
        </NavLink>
  
      </li>
      <li>
        <NavLink exact to="/">
        <span class="material-symbols-outlined">forum</span> Discussions
        </NavLink>
        
      </li>
      <li>
        <NavLink exact to="/">
        <span class="material-symbols-outlined">diversity_3</span> Friends
        </NavLink>
        
      </li>
      <li>
        <NavLink  exact to="/">
        <span class="material-symbols-outlined">military_tech</span> Rankings
        </NavLink>
        
      </li>
    </ul>
  );
};
