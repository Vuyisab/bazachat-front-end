import { createSlice } from "@reduxjs/toolkit";



export const signupSlice = createSlice({
    name:"signup",
    initialState:{},
    reducers:{
        addFirstName:(state,action)=>{
            state["firstname"] = action.payload;
            return state;
        },

        addLastName:(state,action)=>{
            state["lastname"] = action.payload;
            return state;
        },

        addDob:(state,action)=>{
            state["dob"] = action.payload;
            return state;
        },

        addEmail:(state,action)=>{
            state["email"] = action.payload;
            return state;
        },

        addPassword:(state,action)=>{
            state["password"] = action.payload;
        },
        signUp:(state,action)=>{
            const {firstname,lastName,dob,email,password} = action.payload;
            if(firstname && lastName && dob && email && password){
                state['allow'] = true
                const user = {
                    name:firstname + " " + lastName,
                    dob:dob,
                    email:email,
                    password:password

                }
                
                return state;
            }
        }
    }
})


export const {addFirstName,addLastName,addDob,addEmail,addPassword,signUp} = signupSlice.actions;
export const selectName = (state)=>state.signUp.firstname;
export const selectSurname = (state)=>state.signUp.lastname;
export const selectDob = (state)=>state.signUp.dob;
export const selectEmail  = (state)=>state.signUp.email;
export const selectPassword = (state)=>state.signUp.password;
export const selectAllow = (state)=>state.signUp.allow;
export default signupSlice.reducer;