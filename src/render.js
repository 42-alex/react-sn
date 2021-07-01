import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderEntireApp = (state, addPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderEntireApp;
