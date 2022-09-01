import { createSlice } from "@reduxjs/toolkit";

export const forumsSlice = createSlice({
  name: "forums",
  initialState: {
    questions: [
      {
        id: 0,
        name: "Vuyisa Baza",
        title:
          "How do I convert this [ else if ] statement to [ Switch ] statement!",
        language: "Javascript",
        category: "conditionals",
        replies: 0,
        views: 0,
        activity: 7,
      },
      {
        id: 2,
        name: "Vuyisa Baza",
        title:
          "Whats the different between two (`==`) and three (`===`) equal signs?",
        language: "Javascript",
        category: "conditionals",
        replies: 0,
        views: 0,
        activity: 8,
      },
    ],
  },

  reducers:{
    view: (state,action) =>{
        const index = state.questions.findIndex(element=>element.name === action.payload);
        state.questions[index].views++;
        return state;
    },

    reply: (state,action) =>{
        const index = state.questions.findIndex(element=>element.name === action.payload);
        state.questions[index].replies++;
        return state;
    }
  }
});

export const {view,reply} = forumsSlice.actions;


export default forumsSlice.reducer;