import React from "react";
import "./HeaderOptions.css";

export const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
