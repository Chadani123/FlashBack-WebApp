import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
  // console.log('payload on reducer:: ',action.payload)
  switch (action.type) {
    case DELETE:
      return posts.filter(post => post.id !== action.payload);
    case UPDATE:
      return posts.map(post => (post._id === action.payload._id ? action.payload : post));
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
