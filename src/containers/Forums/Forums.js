import React from "react";
import { selectQuestions } from "./ForumsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Side } from "../../components/Side/Side";
import "./Forums.css";
import { Question } from "../../components/Questions/Questions";


export const Forums = () => {
  const data = useSelector(selectQuestions);

  return (
    <section className="forums">
      <Side />
      <article className="container"></article>
      <article className="create">
        <h1>
          <span class="material-symbols-outlined">add_circle</span>
          NEW QUESTION
        </h1>
      </article>
      {data.map((question) => (
        <Question data={question} />
      ))}
    </section>
  );
};
