import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import { addPostActionCreator, updatePostInputActionCreator } from '../../../redux/reducers/profile-reducer';

const MyPosts = ({ posts, newPostText, dispatch }) => {

  const postsElements = posts.map(el =>
    <Post key={el.id} text={el.text} likesCount={el.likesCount} />
  );

  const onAddClick = () => {
    const action = addPostActionCreator();
    dispatch(action);
  }

  const onPostTextChange = (e) => {
    const action = updatePostInputActionCreator(e.target.value)
    dispatch(action);
  }

  return (
    <>
      <div className={classes.postForm}>
        my posts
        <div>
          <textarea value={newPostText} onChange={onPostTextChange} />
          <input type="button" value="Add new post" onClick={onAddClick} />
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </>
  )
}

export default MyPosts;