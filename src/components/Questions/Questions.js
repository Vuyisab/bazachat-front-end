import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useHistory } from "react-router-dom";
import { view } from "../../containers/Forums/ForumsSlice";
import { getDays,getDate } from "./QuestionPage";
import { selectUsers,addUsers } from "../Replies/ReplySlice";


export const Question = ({ data }) => {
  const { _id, firstname,lastname, title, language, category, replies, views, activity,users } = data;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleQuestion = ({target})=>{
    dispatch(view(_id))
    dispatch(addUsers(users));
    fetch(`https://bazachat-backend.herokuapp.com/questions/view/${_id}`, {
      method: "POST",
      body: JSON.stringify({views:views+1}),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    history.push(`/forums/${_id}`);
  }

  //console.log(getDays(activity))
  return (

    <article className="question" onClick={handleQuestion}>
      <div className="title">
        <h1 className="name">{title}</h1>
        <h1 className="name"><span id="prof">{firstname[0]}</span> {firstname + " " + lastname}</h1>
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
          {Math.round(getDays(activity))} days ago
        </p>
      </div>
    </article>
  );
};
