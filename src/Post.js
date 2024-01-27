import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  Comment,
  Repeat,
  Send,
  ThumbsUpDownOutlined,
} from "@mui/icons-material";
import { InputOptions } from "./InputOptions";

export const Post = ({ name, description, message }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__footer">
        <InputOptions Icon={ThumbsUpDownOutlined} title="Like" />
        <InputOptions Icon={Comment} title="Comment" />
        <InputOptions Icon={Repeat} title="Repost" />
        <InputOptions Icon={Send} title="Send" />
      </div>
    </div>
  );
};
