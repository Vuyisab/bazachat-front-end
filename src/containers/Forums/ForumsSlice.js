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
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
        language: "Javascript",
        category: "conditionals",
        replies: 0,
        lastReply:0,
        likes:0,
        views: 0,
        activity: 7,
        users:[],
      },
      {
        id: 2,
        name: "Mihlai Baza",
        title:
          "Whats the different between two (`==`) and three (`===`) equal signs?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
        language: "Javascript",
        category: "conditionals",
        replies: 0,
        lastReply:0,
        likes:0,
        views: 0,
        activity: 8,
        users:[],
      },
    ],
  },

  reducers:{
    view: (state,action) =>{
        const index = state.questions.findIndex(element=>element.id === action.payload);
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
export const selectQuestions = (state)=>state.Forums.questions;

export default forumsSlice.reducer;