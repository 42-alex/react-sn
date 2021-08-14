import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import NewPostForm from './NewPostForm/NewPostForm';

const MyPosts = ({ posts, setNewPostInStore }) => {

  const postsElements = posts.map(el =>
    <Post key={el.id} text={el.text} likesCount={el.likesCount} />
  );

  const onFormSubmit = (formData) => {
    setNewPostInStore(formData.newPostText);
  }

  return (
    <>
      <div className={classes.postForm}>
        <h2>my posts</h2>
        <NewPostForm onSubmit={onFormSubmit} />
      </div>
      <div>
        { postsElements }
      </div>
    </>
  )
}

export default MyPosts;