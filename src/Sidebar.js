import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

export const Sidebar = () => {
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="bkgrd.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Paras</h2>
        <h4>bankotibankoti@gmail</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">223</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,823</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactJS")}
        {recentItems("DSA")}
        {recentItems("javascript")}
        {recentItems("programmingGeek")}
        {recentItems("bigBoss")}
      </div>
    </div>
  );
};
