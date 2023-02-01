import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';
// import Post from '../components/Posts/Post/Post';
// Action Creators are the functions that return actions.
export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    console.log('posts from api:: ', data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post);
    // alert(data)

    // dispatch({ type: UPDATE, payload: data });
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
    dispatch(getPosts());
  } catch (error) {
    console.log(error);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};