import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import Title from "../Title/Title";
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <Title text="My Projects" />
      <div className="mywork__content">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
      <div className="mywork__btn">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
