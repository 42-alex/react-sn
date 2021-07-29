import { addPostActionCreator, updatePostInputActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const { posts, newPostText } = props.store.getState().profilePage;

  const addPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  }

  const updateNewPostText = (newPostText) => {
    const action = updatePostInputActionCreator(newPostText)
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      posts={posts}
      newPostText={newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  )
}

export default MyPostsContainer;