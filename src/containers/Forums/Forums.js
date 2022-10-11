import {React,useEffect} from "react";
import { selectQuestions,addQuestion,cleanQuestions } from "./ForumsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Side } from "../../components/Side/Side";
import "./Forums.css";
import { Question } from "../../components/Questions/Questions";
import { NavLink } from "react-router-dom";


export const Forums = () => {
  const data = useSelector(selectQuestions);
  const dispatch = useDispatch();
  useEffect(()=>{
    fetch(`https://bazachat-backend.herokuapp.com/questions/all`).then(response=>response.json()).then(data=>{
    data.forEach(article=>{
      dispatch(addQuestion(article));
    })
    
      dispatch(cleanQuestions());
  })   
  },[])
  

  return (
    <section className="forums">
      <Side />
      <article className="container"></article>
      <article className="create">
        <NavLink to="/quest">
        <h1>
          <span class="material-symbols-outlined">add_circle</span>
          NEW QUESTION
        </h1>
        </NavLink>
        
      </article>
      {data.map((question) => (
        <Question data={question} />
      ))}
    </section>
  );
};
