import React from "react";
import "../../components/Side/Side";
import { Side } from "../../components/Side/Side";
import store from "../../store";
import { upvote, downvote } from "./FeedSlice";
import { selectMyFeed, selectId } from "./FeedSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Contribution } from "../../components/Contribution/Contribution";
import { Route } from "react-router-dom";
import { Forums } from "../Forums/Forums";

export const Feed = (me) => {
  const feed = useSelector(selectMyFeed);
  //console.log(feed);
  return (
    <section className="feed">
      <Side />
      <Route exact path="/feed">
        <article className="contributions">
          <Contribution />
        </article>
      </Route>
    </section>
  );
};
