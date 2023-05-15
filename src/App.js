import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/Firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect( () =>{
    auth.onAuthStateChanged( userAuth =>{
      if(userAuth){
        // user logged in
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photuUrl: userAuth.photoURL
        }))
      }
      else{
        // user logged out
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) :
       ( <div className="app__body">
          <Sidebar />
          <Feed />
        </div>)

      }



    </div>
  );
}

export default App;
