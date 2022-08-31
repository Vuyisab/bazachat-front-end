import React from "react";
import store from "../../store";
import { addName, addPassword, logIN } from "./LoginSlice";
import { selectName, selectPassword, selectPass } from "./LoginSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const LoginForm = () => {
  const name = useSelector(selectName);
  const password = useSelector(selectPassword);
  const allow = useSelector(selectPass);
  console.log(allow);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
    infocus: "",
  });

  const handleChange = ({ target }) => {
    const parent = target.parentElement;
    parent.style.border = "5px solid grey";
  };

  const handleName = ({ target }) => {
    const Name = target.value;
    //console.log({ name: Name });
    dispatch(addName(Name));
  };

  const handlePassword = ({ target }) => {
    const Password = target.value;
    console.log({ password: Password });
    dispatch(addPassword(Password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIN());
  };

  if(allow){
    history.push("/feed");
  }
  return (
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <legend>Sign In</legend>
        <fieldset id="name">
          <legend>Username</legend>
          <input
            className="wide"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleName}
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>Password</legend>
          <input
            className="wide"
            type="password"
            name="password"
            onChange={handlePassword}
          />
        </fieldset>
        <br />
        <br />
        <input
          className="submit float"
          type="submit"
          value="sign In"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};
