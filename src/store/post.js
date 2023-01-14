import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';
import { store } from '.';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: data,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;

export const updatePost = (name, item) => dispatch => {
  const currentPosts = [...store.getState().postReducer.posts];
  const foundIndex = currentPosts.findIndex(post => post.id === item.id);

  if (name === 'like') {
    currentPosts[foundIndex].like = currentPosts[foundIndex].like + 1;
  } else {
    currentPosts[foundIndex].like =
      currentPosts[foundIndex].like !== 0
        ? currentPosts[foundIndex].like - 1
        : 0;
  }

  dispatch(setPosts(currentPosts));
};

export const updatePosts = name => dispatch => {
  const currentPosts = [...store.getState().postReducer.posts];
  const finalPosts = [];

  if (name === 'like') {
    currentPosts.map(item => finalPosts.push({ ...item, like: item.like + 1 }));
  } else if (name === 'dislike') {
    currentPosts.map(item =>
      finalPosts.push({ ...item, like: item.like !== 0 ? item.like - 1 : 0 }),
    );
  } else {
    currentPosts.map(item => finalPosts.push({ ...item, like: 0 }));
  }

  dispatch(setPosts(finalPosts));
};
