import React from 'react';
import './post.css'
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbsUpDownOutlined } from '@mui/icons-material';

function Post({name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post__header">
          <Avatar />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>

          </div>
        </div>
    <div className="post__body">
        <p>{message}
        </p>
    </div>

    <div className="post__buttons">
      <InputOptions Icon={ThumbsUpDownOutlined} title={'like'} color={"gray"} />
      <InputOptions Icon={ChatOutlined} title={'comment'} color={"gray"} />
      <InputOptions Icon={ShareOutlined} title={'share'} color={"gray"} />
      <InputOptions Icon={SendOutlined} title={'send'} color={"gray"} />

    </div>
   
    </div>
  )
}

export default Post
