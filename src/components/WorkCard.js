import "./WorkCard.css";
import React from "react";
import project1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="Project1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.description}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
