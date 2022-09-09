import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Login/LoginSlice";
import feedReducer from "./containers/Feed/FeedSlice";
import forumsReducer from "./containers/Forums/ForumsSlice";
import signUpReducer from "./components/Login/SignUpSlice"

const store = configureStore({
    reducer:{
        Login:loginReducer,
        signUp: signUpReducer,
        Feed:feedReducer,
        Forums:forumsReducer
    }
})


export default store;