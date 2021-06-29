import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bF8wUsfDaLwvhCLgAk15l_FUNjBA36PPzw&usqp=CAU" alt="post avatar"/>
        { props.text }
      </div>
      <div className={classes.likes}>
        <img src="https://toppng.com/uploads/preview/youtube-like-icon-116093838438u2joytndx.png" alt="like icon"/>
        <span>{ props.likesCount }</span>
      </div>
    </>
  )
}

export default Post;
