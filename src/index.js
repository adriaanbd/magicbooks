import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');
const app = (<Provider store={store}><App /></Provider>);
ReactDOM.render(app, root);
