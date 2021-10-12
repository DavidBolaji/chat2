import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import classes from './App.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';



function App() {
  
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [login, setLogin] = useState(false) 

  useEffect(() => {
    setLogin(isLoggedIn) 
  }, [isLoggedIn])
  
    return (
     <div className={classes.container}>
       <div className={classes.app}>
       {!login ?
       <Login /> :
        <Router>

          <Switch>
          
            <Route path="/users/:Email">
             <Sidebar />
              <Chat />
            </Route>
          
            <Route path="/">
              <Sidebar />
            </Route>

          
          </Switch>
        </Router>
       }
       
       </div>
     </div>
    )
}

export default App;
