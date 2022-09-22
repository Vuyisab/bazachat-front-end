import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name:"login",
    initialState:{
        email:"",
        password:"",
        allow:null
    },
    reducers:{
        addName: (state,action) =>{
            state["email"] = action.payload;
            return state;
        },
        addPassword: (state,action) =>{
            state["password"] = action.payload;
        },
        logIN: (state,action) =>{
            if(action.payload === state["password"]){
                state["allow"] = true;
            }else{
                state["allow"] = false;
            }
            return state;
        }
    }
})


export const {addName,addPassword,logIN} = loginSlice.actions;
export const selectName = (state) => state.Login.email;
export const selectPassword = (state) => state.Login.password;
export const selectPass = (state) => state.Login.allow;
export default loginSlice.reducer;

