import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({ posts, addPost, updatePostInput }) => {

  const textAreaRef = React.createRef();
  const postsElements = posts.map(el =>
    <Post key={el.id} text={el.text} likesCount={el.likesCount} />
  );

  const onAddClick = () => {
    addPost(textAreaRef.current.value);
    textAreaRef.current.value = '';
  }

  const onPostTextChange = () => {
    updatePostInput(textAreaRef.current.value);
  }

  return (
    <>
      <div className={classes.postForm}>
        my posts
        <div>
          <textarea ref={textAreaRef} name="new_post" cols="30" rows="5" onChange={onPostTextChange} />
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