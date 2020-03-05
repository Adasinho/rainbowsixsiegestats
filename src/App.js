import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import './css/theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchPlayer from "./components/SearchPlayer";
import UserComponent from "./components/UserComponent";

function App() {
  const [userId, setUserId] = useState(null);

  const setUserIdCallback = (userId) => {
    setUserId(userId);
    console.log(userId);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <SearchPlayer callback={setUserIdCallback}/>
          </Route>
          <Route path={"/user/:userId"} >
            <UserComponent userId={userId}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
