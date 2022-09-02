import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useHistory } from "react-router-dom";
import { view } from "../../containers/Forums/ForumsSlice";

export const Question = ({ data }) => {
  const { id, name, title, language, category, replies, views, activity } =
    data;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleQuestion = ({target})=>{
    dispatch(view(id))
    history.push(`/forums/${id}`);
  }

  return (

    <article className="question" onClick={handleQuestion}>
      <div className="title">
        <h1 className="name">{title}</h1>
        <h1 className="name"><span id="prof">{name[0]}</span> {name}</h1>
        <div className="small">
          <p>{language}</p>
          <p>{category}</p>
        </div>
      </div>
      <div className="rest">
        <p>
          <span>Replies</span>
          {replies}
        </p>
        <p>
          <span>Views</span>
          {views}
        </p>
        <p>
          <span>Activity</span>
          {activity} days ago
        </p>
      </div>
    </article>
  );
};
