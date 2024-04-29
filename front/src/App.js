import React from 'react';
import axios from 'axios';

import './App.css';
import AppRouter from './AppRouter';

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.common["Content-Type"] = 
      "application/json;charset=utf-8";

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  )
}

export default App;
