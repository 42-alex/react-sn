let state = {
  profilePage: {
    posts: [
      { id: 1, text: 'Are you ready?', likesCount: 4 },
      { id: 2, text: 'Go straight forward, please', likesCount: 2 },
      { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Oliver' },
      { id: 2, name: 'Neil' },
      { id: 3, name: 'Stewart' },
      { id: 4, name: 'Sonya' },
    ],
    messages: [
      { id: 1, message: 'Message 1' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'What is the capital of Great Britain?' },
    ],
  },
}

export default state;
