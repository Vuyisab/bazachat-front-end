import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Login/LoginSlice";
import feedReducer from "./containers/Feed/FeedSlice";
import forumsReducer from "./containers/Forums/ForumsSlice";

const store = configureStore({
    reducer:{
        Login:loginReducer,
        Feed:feedReducer,
        Forums:forumsReducer
    }
})


export default store;