import profileReducer, { setNewPostInStore } from './profile-reducer';


describe('Profile reduces: adding post', () => {

  const mockState = {
    posts: [
      { id: 1, text: 'Are you ready?', likesCount: 4 },
      { id: 2, text: 'Go straight forward, please', likesCount: 2 },
      { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
    ],
  };
  const newPostText = 'This is my new post';


  it('array length increased by one', () => {
    const oldPostsLength = mockState.posts.length;
    const action = setNewPostInStore(newPostText);
    const newState = profileReducer(mockState, action);
    expect(newState.posts.length - oldPostsLength).toBe(1);
  })

  it('new post has an unique id', () => {
    const action = setNewPostInStore(newPostText);
    const newState = profileReducer(mockState, action);
    const [newAddedEl, ...oldPostsArr] = newState.posts;
    expect(oldPostsArr.some(post => post.id === newAddedEl.id)).toBe(false);
  })

  it('new post has a right received body text', () => {
    const action = setNewPostInStore(newPostText);
    const newState = profileReducer(mockState, action);
    const newAddedEl = newState.posts[0];
    expect(newAddedEl.text).toBe(newPostText);
  })

  it('new post has zero likes', () => {
    const action = setNewPostInStore(newPostText);
    const newState = profileReducer(mockState, action);
    const newAddedEl = newState.posts[0];
    expect(newAddedEl.likesCount).toBe(0);
  })
});
