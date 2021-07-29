import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({ posts, newPostText, addPost, updateNewPostText }) => {

  const postsElements = posts.map(el =>
    <Post key={el.id} text={el.text} likesCount={el.likesCount} />
  );

  const onAddClick = () => {
    addPost();
  }

  const onPostTextChange = (e) => {
    updateNewPostText(e.target.value)
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