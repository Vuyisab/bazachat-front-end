import { createSlice } from "@reduxjs/toolkit";


export const pageSlice = createSlice({
  name: "feed",
  initialState: {
    replies: [],
    id: 3,
  },
  reducers: {
    addReply:(state,action)=>{
      state.replies.push(action.payload);
      return state;
    },
    cleanReplies:(state,action)=>{
      for(let i = 0;i < state.replies.length;i++){
        for(let j = 0;j < state.replies.length;j++){
          if(i !== j){
            if(state.replies[i].firstname === state.replies[j].firstname && state.replies[i].lastname === state.replies[j].lastname){
              state.replies.shift(i,i);
            }
          }
        }
      }

      //console.log(state.feed);
      return state;
    },
    like: (state, action) => {
      const index = state.feed.findIndex(
        (element) => element.firstname === action.payload
      );
      state.replies[index].likes++;

      return state;
    },

    downvote: (state, action) => {
      const index = state.replies.findIndex(
        (element) => element.firstname === action.payload
      );
      state.replies[index].votes--;
      return state;
    },
  },
});

export const { like, downvote,addReply,cleanReplies } = pageSlice.actions;
export const selectMyReplies = (state) => state.Page.replies;

export default pageSlice.reducer;
