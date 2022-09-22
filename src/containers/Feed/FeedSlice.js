import { createSlice } from "@reduxjs/toolkit";


export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [
      
      {
        id: 2,
        name: "Ayabonga Baza",
        pic: "",
        title: "Machine Learning is overrated",
        upvotes: 5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
      },
      /*
      {
        id: 3,
        name: "Mihlai Baza",
        pic: "",
        title: "Machine Learning is overrated",
        upvotes: 0,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
      }
      */
    ],
    id: 3,
  },
  reducers: {
    addArticle:(state,action)=>{
      state.feed.push(action.payload);
      return state;
    },
    cleanFeed:(state,action)=>{
      for(let i = 0;i < state.feed.length;i++){
        for(let j = 0;j < state.feed.length;j++){
          if(i !== j){
            if(state.feed[i].firstname === state.feed[j].firstname && state.feed[i].lastname === state.feed[j].lastname){
              state.feed.shift(i,i);
            }
          }
        }
      }

      //console.log(state.feed);
      return state;
    },
    upvote: (state, action) => {
      const index = state.feed.findIndex(
        (element) => element.firstname === action.payload
      );
      state.feed[index].votes++;

      return state;
    },

    downvote: (state, action) => {
      const index = state.feed.findIndex(
        (element) => element.firstname === action.payload
      );
      state.feed[index].votes--;
      return state;
    },
  },
});

export const { upvote, downvote,addArticle,cleanFeed } = feedSlice.actions;
export const selectId = (state) => state.Feed.id;

export const selectMyFeed = (state) => state.Feed.feed;

export default feedSlice.reducer;
