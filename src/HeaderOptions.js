import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

export const HeaderOptions = ({ Icon, title, avatar }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__img" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
