import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { HeaderOptions } from "./HeaderOptions";
import { Home } from "@mui/icons-material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="lkdn.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={NotificationsActiveIcon} title="Notification" />
        <HeaderOptions avatar="avatar.jpg" title="Me" />
      </div>
    </div>
  );
};
