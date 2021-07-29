import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store-redux';
import App from './App';
import './index.css';

const renderEntireApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireApp(store);

store.subscribe(
  () => {
    renderEntireApp(store);
  }
);
