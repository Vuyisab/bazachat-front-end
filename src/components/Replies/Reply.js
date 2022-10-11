import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  selectName,
  selectSurname,
  selectBody,
  selectAllow,
  selectUsers
} from "./ReplySlice";
import { addName, addlastName, addBody, submit } from "./ReplySlice";

export const ReplyForm = () => {
  const { id, title} = useParams();
  //console.log(title);
  const firstname = useSelector(selectName);
  const lastname = useSelector(selectSurname);
  const body = useSelector(selectBody);
  const allow = useSelector(selectAllow);
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(selectUsers);

  const handleName = ({ target }) => {
    dispatch(addName(target.value));
  };

  const handleSurname = ({ target }) => {
    dispatch(addlastName(target.value));
  };

  const handleBody = ({ target }) => {
    dispatch(addBody(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submit());
    console.log(allow)
    if (allow) {
      const reply = {
        firstname: firstname,
        lastname: lastname,
        title: title,
        body: body,
        question_id: id,
        date: Date.now(),
      };

      fetch("https://bazachat-backend.herokuapp.com/replies/add", {
        method: "POST",
        body: JSON.stringify(reply),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      });

      const fullname = firstname + " " + lastname;
      fetch(`https://bazachat-backend.herokuapp.com/questions/reply/${id}`, {
      method: "POST",
      body: JSON.stringify({user:fullname,users:users}),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });

      history.push(`/forums/${id}`);
    }
  };

  return (
    <section className="Form">
      <form onSubmit={handleSubmit}>
        <legend className="titale">Reply to Question</legend>
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
          <legend>Reply</legend>
          <textarea
            rows={30}
            cols={80}
            className="wide"
            type="textarea"
            name="password"
            placeholder="Give a detailed response to the question"
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
