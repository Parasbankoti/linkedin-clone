import React, { useState } from 'react';
import './login.css';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("please enter full name");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl:profilePic,
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName : name,
                    photoUrl:profilePic,
                })
                );
            });
        }).catch((error) => alert("error"))

    }

    const loginToApp = (e) => {
        e.preventDefault();

    }

    return (
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' ></img>

            <form>
                <input placeholder='fullname' value={name} onChange={e => setName(e.target.value)} type="text" />
                <input placeholder='email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <input placeholder='enter photo URL' type='text' value={profilePic} onChange={e => setProfilePic(e.target.value)} ></input>
                <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} ></input>

                <button type='submit' onClick={loginToApp}
                > sign in</button>

            </form>
            <p >Not a member!
                <span className='login__register' onClick={register} >Register</span>
            </p>


        </div>
    )
}

export default Login
