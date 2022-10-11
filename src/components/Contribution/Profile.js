import React from "react";
import pic from "../../images/account_circle_FILL0_wght400_GRAD0_opsz48.png";
import "./Contribution.css";
import { upvote, downvote } from "../../containers/Feed/FeedSlice";

export const Person = ({ secret, dispatch, person }) => {
  const { _id, firstname, lastname, title, votes, body } = person;
  

  const handleUp = ({ target }) => {
    //dispatch(upvote(name));
    //console.log("we are here");
    dispatch(upvote(person.firstname));
    fetch(`https://bazachat-backend.herokuapp.com/feed/vote/${_id}`, {
      method: "POST",
      body: JSON.stringify({vote:votes+1}),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
  };

  const handleDown = ({ target }) => {
    dispatch(downvote(person.firstname));
    fetch(`https://bazachat-backend.herokuapp.com/feed/vote/${_id}`, {
      method: "POST",
      body: JSON.stringify({vote:votes-1}),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
  };

  return (
    <section className="feed">
      <article className="top">
        <div className="friends">
          <img src={pic}></img>
          <h3>{firstname + " " + lastname}</h3>
        </div>
        <p>
          <span className="material-symbols-outlined" onClick={handleUp}>
            arrow_drop_up
          </span>
          <span className="votes">{votes}</span>
          <span class="material-symbols-outlined" onClick={handleDown}>
            arrow_drop_down
          </span>
        </p>
      </article>
      <article className="bottom">
        <h2>{title}</h2>
        <p>{body.substr(0, 200) + "..."}</p>
      </article>
    </section>
  );
};
