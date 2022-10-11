import { createSlice } from "@reduxjs/toolkit";

export const QuestionSlice = createSlice({
  name: "question",
  initialState: {
    question:{
        firstname:"",
        lastname:"",
        title:"",
        body:"",
        allow:false

    }
  },

  reducers:{
    addName: (state,action) =>{
        state.question.firstname = action.payload;
        return state;
    },

    addSurname:(state,action)=>{
      state.question.lastname = action.payload;
      return state;
    },
    addTitle:(state,action)=>{
        state.question.title = action.payload;
        return state;
    },
    addBody:(state,action)=>{
        state.question.body = action.payload;
        return state;
    },

    submit:(state,action)=>{
        if(state.question.firstname && state.question.lastname && state.question.title && state.question.body){
            state.question.allow = true;
        }

        return state;
    }
   
  }
});

export const {addName,addSurname,addTitle,addBody,submit} = QuestionSlice.actions;
export const selectName = (state)=>state.Question.question.firstname;
export const selectSurname = (state)=>state.Question.question.lastname;
export const selectTitle = (state)=>state.Question.question.title;
export const selectBody = (state)=>state.Question.question.body;
export const selectAllow = (state)=>state.Question.question.allow;
export default QuestionSlice.reducer;