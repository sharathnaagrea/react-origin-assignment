import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import { fetchEmployees } from './actions/employee-actions';
import employees from './data/employee-data.json';


const store = createStore(rootReducer);
store.dispatch(fetchEmployees(employees));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
