import React from "react";
import "./Feed.css";
import {
  Article,
  CalendarMonth,
  EditNote,
  InsertPhoto,
} from "@mui/icons-material";
import { InputOptions } from "./InputOptions";
import { blue, orange, red } from "@mui/material/colors";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditNote />
          <form>
            <input
              type="text"
              className="text__area"
              placeholder="Start a post"
            />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions
            Icon={InsertPhoto}
            title={"Media"}
            iconColor={red[500]}
          />
          <InputOptions
            Icon={CalendarMonth}
            title={"Events"}
            iconColor={orange[500]}
          />
          <InputOptions
            Icon={Article}
            title={"Write Article"}
            iconColor={blue[500]}
          />
        </div>
      </div>

      <Post
        name="paras"
        description="software engineer"
        message="started wotking at microsoft"
      />
    </div>
  );
};
