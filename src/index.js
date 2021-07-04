import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';
import './index.css';

const renderEntireApp = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireApp(store);

store.subscribe(renderEntireApp);
