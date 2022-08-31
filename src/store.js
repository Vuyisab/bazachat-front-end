import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/Login/LoginSlice";
import feedReducer from "./containers/Feed/FeedSlice";

const store = configureStore({
    reducer:{
        Login:loginReducer,
        Feed:feedReducer
    }
})


export default store;