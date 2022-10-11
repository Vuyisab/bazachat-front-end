import { createSlice } from "@reduxjs/toolkit";

export const forumsSlice = createSlice({
  name: "forums",
  initialState: {
    questions: [
      /*{ 
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
      },*/

      {
        _id: 2,
        firstname: "Mihlai",
        lastname: "Baza",
        title:
          "Whats the different between two (`==`) and three (`===`) equal signs?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
        language: "Javascript",
        category: "conditionals",
        replies: 0,
        lastReply: 0,
        likes: 0,
        views: 0,
        activity: 8,
        users: [],
      },
    ],
  },

  reducers: {
    view: (state, action) => {
      const index = state.questions.findIndex(
        (element) => element._id === action.payload
      );
      state.questions[index].views++;
      return state;
    },

    addQuestion: (state, action) => {
      state.questions.push(action.payload);
      return state;
    },

    cleanQuestions: (state, action) => {
      for (let i = 0; i < state.questions.length; i++) {
        for (let j = 0; j < state.questions.length; j++) {
          if (i !== j) {
            if (
              state.questions[i].firstname === state.questions[j].firstname &&
              state.questions[i].lastname === state.questions[j].lastname &&
              state.questions[i].title === state.questions[j].title
            ) {
              state.questions.shift(i, i);
            }
          }
        }
      }

      //console.log(state.feed);
      return state;
    },

    reply: (state, action) => {
      const index = state.questions.findIndex(
        (element) => element.name === action.payload
      );
      state.questions[index].replies++;
      return state;
    },
  },
});

export const { view, reply, addQuestion, cleanQuestions } = forumsSlice.actions;
export const selectQuestions = (state) => state.Forums.questions;

export default forumsSlice.reducer;
