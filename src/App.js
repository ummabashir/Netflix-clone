import React, { useEffect } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
// import { selectUser } from './userSlice';
// import { auth,provider } from './firebase'; 
// import { login, logout } from './userSlice';
// import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = null;

  // const dispatch = useDispatch();
  
  //useeffect allows us to perform side effects on a component
  // useEffect((provider) => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => { 
  //     if (userAuth) { 
  //       //logged in
  //       dispatch(
  //         login({
  //           uid: userAuth.uid, 
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       //log out
  //       dispatch(logout());
  //     }
  //   });
  //   return unsubscribe;
  // }, [login]);
 
 
  
  return (
   
    <div className="app">
      <Router>
        {!user ? ( <LoginScreen /> ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
        )}
    </Router>
    </div>
   
  );
}


export default App;

