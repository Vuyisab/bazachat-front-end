import { React, useEffect } from "react";
import store from "../../../store";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../components/Login/Login.css";
import { selectQuestions, addQuestion } from "../ForumsSlice";
import {
  selectName,
  selectSurname,
  selectTitle,
  selectBody,
  selectAllow,
} from "./QuestionSlice";
import {
  addName,
  addSurname,
  addTitle,
  addBody,
  submit,
} from "./QuestionSlice";

export const QuestionForm = () => {
  const data = useSelector(selectQuestions);
  const name = useSelector(selectName);
  const surname = useSelector(selectSurname);
  const title = useSelector(selectTitle);
  const body = useSelector(selectBody);
  const allow = useSelector(selectAllow);
  console.log(allow);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleName = ({ target }) => {
    dispatch(addName(target.value));
  };

  const handleSurname = ({ target }) => {
    dispatch(addSurname(target.value));
  };

  const handleTitle = ({ target }) => {
    dispatch(addTitle(target.value));
  };

  const handleBody = ({ target }) => {
    dispatch(addBody(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit());
    if (allow) {
      const language = "Javascript";
      const category = "miscelleneous";
      const replies = 0;
      const lastReply = Date.now();
      const likes = 0;
      const views = 0;
      const activity = Date.now();
      const users = [];

      const question = {
        firstname: name,
        lastname: surname,
        title: title,
        body: body,
        language: language,
        category: category,
        replies: replies,
        lastReply: lastReply,
        likes: likes,
        views: views,
        activity: activity,
        users: users,
      };

      fetch("http://192.168.2.10:3001/questions/add", {
        method: "POST",
        body: JSON.stringify(question),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      history.push("/forums");
    }
  };

  

  return (
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <legend className="titale">Ask Question</legend>
        <fieldset id="name">
          <legend>Firstname</legend>
          <input
            className="wide"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleName}
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>LastName</legend>
          <input
            className="wide"
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={handleSurname}
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>Question title</legend>
          <input
            className="wide"
            type="text"
            name="title"
            placeholder="Summarise your question in 20 words or less"
            onChange={handleTitle}
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>Question</legend>
          <textarea
            rows={30}
            cols={80}
            className="wide"
            type="textarea"
            name="password"
            placeholder="Give a detailed explanation of your question"
            onChange={handleBody}
          />
        </fieldset>
        <br />
        <br />
        <input
          className="submit float"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};
