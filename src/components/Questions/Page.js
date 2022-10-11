
import React from "react";
import { useParams } from "react-router-dom";
import { Side } from "../Side/Side";
import { selectQuestions } from "../../containers/Forums/ForumsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./QuestionPage.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { selectMyReplies } from "./PageSlice";
import { addReply,cleanReplies } from "./PageSlice";

export const getDays = (date)=>{
  
    const date1 = new Date(date);
    const date2 = new Date(Date.now());
    const difference = date2.getTime() - date1.getTime();
    return difference / (1000 * 3600 * 24);
  }
  
  export const getDate = (date)=>{
    const date1 = new Date(date);
    return `${date1.getDate()}-${date1.getMonth()+1}-${date1.getFullYear()}`;
  }


export const Page = ({reply})=>{
   const {firstname,lastname,activity,title,body,date} = reply;

    return (
        <article className="container">
        <div className="lineone">
          <h1>
          <span id="profilin">{firstname[0]}</span> <span>{firstname + " " + lastname}</span>
          </h1>
          <p>{getDate(date)}</p>
        </div>
        <p className="title">{title}</p>
        <p id="body">{body}</p>
        <p className="reply">
          <span class="material-symbols-outlined up yeah">thumb_up</span>
          
          <div className="yeah reply">
            <span class="material-symbols-outlined">reply </span>
            <span>Reply</span>
          </div>
          
        </p>
      </article>
    )
}