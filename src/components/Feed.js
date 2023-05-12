import React from 'react';
import './feed.css';
import CreateIcon from '@mui/icons-material/Create';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import InputOptions from './InputOptions';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type='text'/>
                <button type='submit' >send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
        <InputOptions Icon={AddPhotoAlternateIcon} title={"Photo"} color="#7085F9" />
        <InputOptions Icon={VideoCameraFrontIcon} title={"Video"} color="#E7A33E" />
        <InputOptions Icon={EventIcon} title={"Events"} color="#C0CBCD" />
        <InputOptions Icon={ArticleIcon} title={"Writearticle"} color="#7FC15E"  />
       
        </div>
      </div>

    

    </div>
  )
}

export default Feed
