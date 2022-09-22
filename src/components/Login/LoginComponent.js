import {React,useEffect} from "react";
import store from "../../store";
import { addName, addPassword, logIN } from "./LoginSlice";
import { selectName, selectPassword, selectPass } from "./LoginSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { addArticle } from "../../containers/Feed/FeedSlice";
import { selectMyFeed } from "../../containers/Feed/FeedSlice";

export const LoginForm = () => {
  const name = useSelector(selectName);
  const password = useSelector(selectPassword);
  const allow = useSelector(selectPass);
  const dispatch = useDispatch();
  const history = useHistory();
  const feed = useSelector(selectMyFeed);
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
    //console.log({ password: Password });
    dispatch(addPassword(Password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/users/${name}`).then(response=>response.json()).then(data=>{
      const x = data.password;
      dispatch(logIN(x));
    })
    
  };

 

  if(allow){
   history.push("/feed");
  }
  return (
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <legend className="titale">Sign In</legend>
        <fieldset id="name">
          <legend>Username</legend>
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
          <legend>Password</legend>
          <input
            className="wide"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
        </fieldset>
        <br />
        {allow===false ? <p className="danger">Your email or password was incorrect</p>: <p></p>}
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
