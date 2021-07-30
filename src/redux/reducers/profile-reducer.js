const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';

const initialState = {
  posts: [
    { id: 1, text: 'Are you ready?', likesCount: 4 },
    { id: 2, text: 'Go straight forward, please', likesCount: 2 },
    { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newState = { ...state };
      newState.posts = [ ...state.posts ];
      const newPost = {
        id: 1,
        text: state.newPostText,
        likesCount: 0
      }
      newState.posts.unshift(newPost);
      newState.newPostText = '';
      return newState;
    }
    case UPDATE_POST_INPUT: {
      let newState = { ...state };
      newState.newPostText = action.text;
      return newState;
    }
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
