import { addPostActionCreator, updatePostInputActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    const action = addPostActionCreator();
    dispatch(action);
  },
  updateNewPostText: (newPostText) => {
    const action = updatePostInputActionCreator(newPostText)
    dispatch(action);
  }
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;