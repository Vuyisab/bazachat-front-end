import React from "react";
import "./Login.css";
import { useSelector,useDispatch } from "react-redux";
import { selectName,selectSurname,selectDob,selectEmail,selectPassword } from "./SignUpSlice";
import { addFirstName,addLastName,addDob,addEmail,addPassword } from "./SignUpSlice";

export const SignUpForm = ()=>{
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const surname = useSelector(selectSurname);
    const dob = useSelector(selectDob);
    const email = useSelector(selectDob);
    const password = useSelector(selectPassword);

    const handleName = ({target})=>{
        const name = target.value;
        dispatch(addFirstName(name));
    }

    const handleSurname = ({target})=>{
        const surname = target.value;
        dispatch(addLastName(surname));
    }

    const handleDOB = ({target})=>{
        const dob = target.value;
        dispatch(addDob(dob));
    }

    return(
    <section className="Form">
      <form >
        <legend className="titale">Sign Up</legend>
        <fieldset id="name">
          <legend>First name</legend>
          <input
            className="wide"
            type="text"
            name="firstname"
            placeholder="First name"
            
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
            
          />
        </fieldset>
        <br />
        <br />
        <input
          className="submit float"
          type="submit"
          value="sign Up"
          
        />
      </form>
    </section>
    )
}