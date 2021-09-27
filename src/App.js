import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './screens/homeScreen/Home';
import Login from './screens/loginScreen/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice'
import Profile from './screens/profileScreen/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,          
        }));
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />          
        </Switch>
      )}
    </div>
  );
}

export default App;
