import React from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectName,
  selectSurname,
  selectDob,
  selectEmail,
  selectPassword,
  selectAllow,
} from "./SignUpSlice";
import {
  addFirstName,
  addLastName,
  addDob,
  addEmail,
  addPassword,
  signUp,
} from "./SignUpSlice";
import { useHistory } from "react-router-dom";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const surname = useSelector(selectSurname);
  const dob = useSelector(selectDob);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const allow = useSelector(selectAllow);
  const history = useHistory();

  const handleName = ({ target }) => {
    const name = target.value;
    dispatch(addFirstName(name));
  };

  const handleSurname = ({ target }) => {
    const surname = target.value;
    dispatch(addLastName(surname));
  };

  const handleDOB = ({ target }) => {
    const dob = target.value;
    dispatch(addDob(dob));
  };

  const handleEmail = ({ target }) => {
    const email = target.value;
    dispatch(addEmail(email));
  };

  const handlePassword = ({ target }) => {
    const password = target.value;
    dispatch(addPassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");

    dispatch(
      signUp({
        firstname: name,
        lastName: surname,
        dob: dob,
        email: email,
        password: password,
      })
    );

    const user = {
      firstname: name,
      lastName: surname,
      dob: dob,
      email: email,
      password: password,
    };
    fetch("https://bazachat-backend.herokuapp.com/users/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
  };

  if (allow) {
    history.push("/feed");
  }

  return (
    <section className="Form">
      <form
        method="POST"
        action="/"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <legend className="titale">Sign Up</legend>
        <fieldset id="name">
          <legend>First name</legend>
          <input
            className="wide"
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={handleName}
            required
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Last name</legend>
          <input
            className="wide"
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={handleSurname}
            required
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Date of Birth</legend>
          <input
            className="wide"
            type="date"
            name="dob"
            placeholder="DD/MM/YYYY"
            onChange={handleDOB}
            required
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Email address</legend>
          <input
            className="wide"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleEmail}
            required
          />
        </fieldset>
        <br />
        <fieldset id="name">
          <legend>Profile picture</legend>
          <input
            className="wide"
            type="file"
            name="image"
            id="image"
            placeholder="choose file"
            required
          />
        </fieldset>
        <br />
        <fieldset id="password">
          <legend>Password</legend>
          <input
            className="wide"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlePassword}
            required
            minLength={8}
          />
        </fieldset>
        <br />
        <br />
        <input
          className="submit float"
          type="submit"
          value="sign Up"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};
