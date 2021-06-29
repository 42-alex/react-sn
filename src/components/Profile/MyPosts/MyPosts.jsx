import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <>
      <div>
        my posts
        <div>
          <textarea name="new_post" id="new_post" cols="30" rows="5"></textarea>
          <input type="button" value="Add new post" />
        </div>
      </div>
      <div>
        <Post text='post 1' likesCount={4} />
        <Post text='post 2' likesCount={1} />
      </div>
    </>
  )
}

export default MyPosts;