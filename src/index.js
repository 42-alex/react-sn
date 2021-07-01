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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
