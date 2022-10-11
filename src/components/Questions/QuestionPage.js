import React from "react";
import { useParams } from "react-router-dom";
import { Side } from "../Side/Side";
import { selectQuestions } from "../../containers/Forums/ForumsSlice";
import { useSelector } from "react-redux";
import "./QuestionPage.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Page } from "./Page";
import { useDispatch } from "react-redux";
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

export const QuestionPage = () => {
  const dispatch = useDispatch();
  const Replies = useSelector(selectMyReplies);
  const history  = useHistory();
  const { id } = useParams();
  const data = useSelector(selectQuestions);
  useEffect(()=>{
    fetch(`https://bazachat-backend.herokuapp.com/replies/all`).then(response=>response.json()).then(data=>{
    data.forEach(reply=>{
      if (reply.question_id === id ){
        dispatch(addReply(reply))
      }
      
    })
    return ()=>{
      dispatch(cleanReplies());
    }
    
  })   
  },[])

  useEffect(()=>{
    dispatch(cleanReplies);
  },[]);



  
  const index = data.findIndex((element) => element._id == id);
  let {
    firstname,
    lastname,
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

  const handleLike = ({event})=>{
    fetch(`https://bazachat-backend.herokuapp.com/questions/like/${id}`, {
      method: "POST",
      body: JSON.stringify({likes:likes+1}),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });

    likes = likes+1;
  }

  const handleReply = ({event})=>{
    history.push(`/reply/${id}/${title}`);
  }

  return (
    <section id="forums">
      <Side />
      <article className="container">
        <div className="lineone">
          <h1>
            <span id="profilin">{firstname[0]}</span> <span>{firstname + " " + lastname}</span>
          </h1>
          <p>{getDate(activity)}</p>
        </div>
        <p className="title">{title}</p>
        <p id="body">{body}</p>
        <p className="reply">
          <span class="material-symbols-outlined up yeah" onClick={handleLike}>thumb_up</span>
          
          <div className="yeah reply" onClick={handleReply}>
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
              <p>{Math.round(getDays(activity))}d</p>
              <p>{Math.round(getDays(lastReply))}d</p>
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
      {Replies.map(reply=>(
        <Page reply={reply} users={users}/>
      ))}
    </section>
  );
};
