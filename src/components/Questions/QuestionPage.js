import React from "react";
import { useParams } from "react-router-dom";
import { Side } from "../Side/Side";
import { selectQuestions } from "../../containers/Forums/ForumsSlice";
import { useSelector } from "react-redux";
import "./QuestionPage.css";

export const QuestionPage = () => {
  const { id } = useParams();
  const data = useSelector(selectQuestions);
  const index = data.findIndex((element) => element.id == id);
  const {
    name,
    title,
    language,
    category,
    activity,
    body,
    replies,
    lastReply,
    views,
    users,
    likes,
  } = data[index];
  console.log(name);

  return (
    <section id="forums">
      <Side />
      <article id="container">
        <div className="lineone">
          <h1>
            <span id="profilin">{name[0]}</span> <span>{name}</span>
          </h1>
          <p>{activity}d</p>
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
        <div className="stats">
          <div className="thelabels">
            <div>
              <p>created</p>
              <p>last reply</p>
            </div>
            <div>
              <p>{activity}d</p>
              <p>{lastReply}d</p>
            </div>
          </div>
          <div className="bigboys">
            <div className="giants">
              <p className="big">{replies}</p>
              <p className="big">{views}</p>
              <p className="big">{users.length}</p>
              <p className="big">{likes}</p>
            </div>
            <div>
              <p>replies</p>
              <p>views</p>
              <p>users</p>
              <p>likes</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
