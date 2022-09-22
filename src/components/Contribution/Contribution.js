import {React,useEffect} from "react";
import store from "../../store";
import { selectMyFeed, selectId } from "../../containers/Feed/FeedSlice";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { addArticle } from "../../containers/Feed/FeedSlice";
import "./Contribution.css";
import pic from "../../images/account_circle_FILL0_wght400_GRAD0_opsz48.png";
import { Person } from "./Profile";


export const Contribution = () => {
  const dispatch = useDispatch();
  const feed = useSelector(selectMyFeed);
  let secret = useSelector(selectId);
  //const person = feed[0];
  //const { _id, name, title, upvotes, body } = person;
  

  const handleHover = ({ target }) => {};

  return (
    <section className="container">
      <div className="banner">
        <div className="overlay"></div>
        <h1>
          Welcome <br />
          to <br />
          your feed{" "}
        </h1>
      </div>

      <ul>
        {feed.map((person) => (
          <li id={secret++}>
            <Person secret={person._id} dispatch={dispatch} person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
};
