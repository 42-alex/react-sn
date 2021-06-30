import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    { id: 1, text: 'Are you ready?', likesCount: 4 },
    { id: 2, text: 'Go straight forward, please', likesCount: 2 },
    { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
  ];

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