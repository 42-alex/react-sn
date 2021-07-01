import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostInput } from './redux/state';

const renderEntireApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostInput={updatePostInput} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderEntireApp;
