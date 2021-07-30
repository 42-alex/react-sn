import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store-redux';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const renderEntireApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireApp();

store.subscribe(renderEntireApp);
