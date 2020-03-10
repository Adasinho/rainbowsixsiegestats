import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import './css/theme.css';

import ApplicationView from "./views/ApplicationView";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          <ApplicationView/>
      </Router>
    </div>
  );
}

export default App;
