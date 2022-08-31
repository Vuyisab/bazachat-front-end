import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [
      {
        id: 0,
        name: "Vuyisa Baza",
        pic: "",
        title: "Ideas for generating new data",
        upvotes: 15,
        body:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
      },
      {
        id: 2,
        name: "Ayabonga Baza",
        pic: "",
        title: "Machine Learning is overrated",
        upvotes: 5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
      },
      {
        id: 3,
        name: "Mihlai Baza",
        pic: "",
        title: "Machine Learning is overrated",
        upvotes: 0,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros. Maecenas volutpat blandit aliquam etiam. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eleifend quam adipiscing vitae proin. Lectus sit amet est placerat in egestas. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Interdum varius sit amet mattis vulputate enim",
      }
    ],
    id: 3,
  },
  reducers: {
    upvote: (state, action) => {
      const index = state.feed.findIndex(
        (element) => element.name === action.payload
      );
      state.feed[index].upvotes++;

      return state;
    },

    downvote: (state, action) => {
      const index = state.feed.findIndex(
        (element) => element.name === action.payload
      );
      state.feed[index].upvotes--;
      return state;
    },
  },
});

export const { upvote, downvote } = feedSlice.actions;
export const selectId = (state) => state.Feed.id;

export const selectMyFeed = (state) => state.Feed.feed;

export default feedSlice.reducer;
