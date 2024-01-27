import React from "react";
import "./InputOptions.css";

export const InputOptions = ({ Icon, title, iconColor }) => {
  // console.log(iconColor);
  return (
    <div className="feed__inputOptions">
      <div className="feed__images">
        {Icon && <Icon style={{ color: iconColor }} className="feed__icon" />}
        <span>{title}</span>
      </div>
    </div>
  );
};
