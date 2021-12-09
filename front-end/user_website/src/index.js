import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.baseURL = 'https://arcadegame-gonin-server.herokuapp.com/'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
