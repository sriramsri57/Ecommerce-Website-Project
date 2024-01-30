import React from 'react';
import "./global.css";
import ReactDOM from 'react-dom/client';
import Navbar from './components/layouts/Header';
import App from './App';
import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>
);

