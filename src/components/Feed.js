import React, { useEffect, useState } from 'react';
import './feed.css';
import CreateIcon from '@mui/icons-material/Create';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import InputOptions from './InputOptions';
import Post from './Post';
import {  db } from './Firebase';
import firebase from 'firebase/compat/app';


const Feed = () => {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() =>{
    db.collection("posts").onSnapshot((snapshot)=>{
      setPosts(
        snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),
        }))
      )
    })

  },[]);
  
  const sendPost = (e)=>{
    e.preventDefault(); 
     
    db.collection('posts').add({
      name:'patil ',
      description:'test desc',
      message: input,
      photoUrl:'',
      timestamp :firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type='text' value={input} onChange={ e=> setInput(e.target.value) } />
            <button type='submit' onClick={sendPost} >send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={AddPhotoAlternateIcon} title={"Photo"} color="#7085F9" />
          <InputOptions Icon={VideoCameraFrontIcon} title={"Video"} color="#E7A33E" />
          <InputOptions Icon={EventIcon} title={"Events"} color="#C0CBCD" />
          <InputOptions Icon={ArticleIcon} title={"Writearticle"} color="#7FC15E" />

        </div>
      </div>
      {/* Posts */}

      {posts.map ( ({id ,data:{name, description, message, photoUrl } }) =>(
        <Post
         key={id}
         name={name}
         description={description}
         message={message}
         photoUrl={photoUrl}
        />
      ))}


    </div>
  )
}

export default Feed;
