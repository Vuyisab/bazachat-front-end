import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name:"login",
    initialState:{
        name:"",
        password:"",
        allow:false
    },
    reducers:{
        addName: (state,action) =>{
            state["name"] = action.payload;
            return state;
        },
        addPassword: (state,action) =>{
            state["password"] = action.payload;
        },
        logIN: (state,action) =>{
            if(state.name === "Vuyisa" && state.password === "Vigi" ){
                state["allow"] = true;
            }else{
                state["allow"] = false;
            }
            
            return state;
        }
    }
})


export const {addName,addPassword,logIN} = loginSlice.actions;
export const selectName = (state) => state.Login.name;
export const selectPassword = (state) => state.Login.password;
export const selectPass = (state) => state.Login.allow;
export default loginSlice.reducer;

