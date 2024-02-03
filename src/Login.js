import React, { useState } from "react";
import "./Login.css";
//import { auth, signInWithEmailAndPassword } from "./Firebase";
import { auth } from "./Firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const register = () => {
    if (!name) {
      return alert("Please fill name");
    }
    if (!email) {
      return alert("Please fill email");
    }
    const userCredential = createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        userAuth.user.displayName = name;
        userAuth.user.photoURL = profilePic;
        console.log(userAuth);
      })
      .then(() => {
        dispatch(
          login({
            user: name,
            email: email,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userAuth) => {
  //     return userAuth.user
  //       .updateProfile( {
  //         displayName: name,
  //         photoURL: profilePic,
  //       })
  //       .then(() => {
  //         dispatch(
  //           login({
  //             email: userAuth.user.email,
  //             uid: userAuth.user.uid,
  //             displayName: name,
  //             photoUrl: profilePic,
  //           })
  //         );
  //       });
  //   })
  //   .catch((error) => alert(error.message));
  // };

  // signInWithEmailAndPassword(email, password)
  //   .then((userAuth) => {
  //     userAuth.user
  //       .updateProfile({
  //         deiplayName: name,
  //         photoURL: profilePic,
  //       })
  //       .then(() => {
  //         dispatch(
  //           login({
  //             email: userAuth.user.email,
  //             uid: userAuth.user.uid,
  //             displayName: name,
  //             photoUrl: profilePic,
  //           })
  //         );
  //       });
  //   })
  //   .catch((error) => alert(error.message));

  const loginToApp = (e) => {
    e.preventDefault();
    //auth;
  };

  return (
    <div className="login">
      <form>
        <input
          placeholder="Username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Profile Pic Link"
          type="text"
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {"  "}
          Register Now
        </span>
      </p>
    </div>
  );
};
