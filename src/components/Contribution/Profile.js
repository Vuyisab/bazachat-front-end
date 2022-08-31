import React from "react";
import pic from "../../images/account_circle_FILL0_wght400_GRAD0_opsz48.png";
import "./Contribution.css";
import { upvote, downvote } from "../../containers/Feed/FeedSlice";

export const Person = ({secret,dispatch,person}) =>{
    const { id, name, title, upvotes, body } = person;

    const handleUp = ({ target }) => {
        //dispatch(upvote(name));
        //console.log("we are here");
        dispatch(upvote(person.name));
      };
    
      const handleDown = ({ target }) => {
        dispatch(downvote(person.name));
      };

    return (
        <section className="feed">
          <article className="top">
            <div className="friends">
              <img src={pic}></img>
              <h3>{name}</h3>
            </div>
            <p>
              <span className="material-symbols-outlined" onClick={handleUp}>
                arrow_drop_up
              </span>
              <span className="votes">{upvotes}</span>
              <span class="material-symbols-outlined" onClick={handleDown}>arrow_drop_down</span>
            </p>
          </article>
          <article className="bottom">
            <h2>{title}</h2>
            <p>{body.substr(0,200) + "..."}</p>
          </article>
        </section>
      );
}