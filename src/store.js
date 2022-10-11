import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Login/LoginSlice";
import feedReducer from "./containers/Feed/FeedSlice";
import forumsReducer from "./containers/Forums/ForumsSlice";
import signUpReducer from "./components/Login/SignUpSlice"
import questionReducer from "./containers/Forums/Questions/QuestionSlice";
import replyReducer from "./components/Replies/ReplySlice"
import pageReducer from "./components/Questions/PageSlice"

const store = configureStore({
    reducer:{
        Login:loginReducer,
        signUp: signUpReducer,
        Feed:feedReducer,
        Forums:forumsReducer,
        Question:questionReducer,
        Reply:replyReducer,
        Page:pageReducer
    }
})


export default store;