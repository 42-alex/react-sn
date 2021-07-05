const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 1,
        text: state.newPostText,
        likesCount: 0
      }
      state.posts.unshift(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_POST_INPUT:
      state.newPostText = action.text;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostInputActionCreator = (text) => ({
  type: UPDATE_POST_INPUT,
  text: text,
})

export default profileReducer;
