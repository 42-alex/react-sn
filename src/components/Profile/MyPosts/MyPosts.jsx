import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({ posts, newPostText, dispatch }) => {

  const textAreaRef = React.createRef();
  const postsElements = posts.map(el =>
    <Post key={el.id} text={el.text} likesCount={el.likesCount} />
  );

  const onAddClick = () => {
    const action = {
      type: 'ADD_POST',
    }
    dispatch(action);
    textAreaRef.current.value = '';
  }

  const onPostTextChange = () => {
    const action = {
      type: 'UPDATE_POST_INPUT',
      text: textAreaRef.current.value,
    }
    dispatch(action);
  }

  return (
    <>
      <div className={classes.postForm}>
        my posts
        <div>
          <textarea ref={textAreaRef} value={newPostText} cols="30" rows="5" onChange={onPostTextChange} />
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