import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import axios from 'axios'

axios.defaults.baseURL = 'https://arcadegame-gonin-server.herokuapp.com/';
ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);

