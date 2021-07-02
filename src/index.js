import React from 'react';
import ReactDOM from 'react-dom';
import state, { addPost, updatePostInput, subscribe } from './redux/state';
import App from './App';
import './index.css';

const renderEntireApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostInput={updatePostInput} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireApp(state);

subscribe(renderEntireApp);
