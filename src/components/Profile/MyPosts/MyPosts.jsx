import Post from "./Post/Post";

const MyPosts = ({ posts }) => {

  return (
    <>
      <div>
        my posts
        <div>
          <textarea name="new_post" id="new_post" cols="30" rows="5" />
          <input type="button" value="Add new post" />
        </div>
      </div>
      <div>
        { posts.map(el => <Post key={el.id} text={el.text} likesCount={el.likesCount} />) }
      </div>
    </>
  )
}

export default MyPosts;