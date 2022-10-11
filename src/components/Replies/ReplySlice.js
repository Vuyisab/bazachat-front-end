import { createSlice } from "@reduxjs/toolkit";
export const ReplySlice = createSlice({
    name:"reply",
    initialState:{
        firstname:"",
        lastname:"",
        body:"",
        users:[],
        allow:false
    },
    reducers:{
        addName: (state,action) =>{
            state["firstname"] = action.payload;
            return state;
        },

        addUsers:(state,action)=>{
            state["users"] = action.payload;
            return state;
        },
        addlastName: (state,action) =>{
            state["lastname"] = action.payload;
            return state;
        },
        addBody:(state,action)=>{
            state["body"] = action.payload;
            return state;
        },
        submit:(state,action)=>{
            if(state.firstname && state.lastname && state.body){
                state.allow = true;
            }
    
            return state;
        }
    }
})


export const {addName,addlastName,addBody,addUsers,submit} = ReplySlice.actions;
export const selectName = (state) => state.Reply.firstname;
export const selectSurname = (state) => state.Reply.lastname;
export const selectBody = (state) => state.Reply.body;
export const selectAllow = (state)=>state.Reply.allow;
export const selectUsers = (state)=>state.Reply.users
export default ReplySlice.reducer;

