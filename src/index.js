import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const posts = [
  { id: 1, text: 'Are you ready?', likesCount: 4 },
  { id: 2, text: 'Go straight forward, please', likesCount: 2 },
  { id: 3, text: 'Where is the bathroom?', likesCount: 0 },
];

const dialogs = [
  { id: 1, name: 'Oliver' },
  { id: 2, name: 'Neil' },
  { id: 3, name: 'Stewart' },
  { id: 4, name: 'Sonya' },
];
const messages = [
  { id: 1, message: 'Message 1' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'What is the capital of Great Britain?' },
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
