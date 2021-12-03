import React from "react";
import "./about.css";
import Camera from "../../img/camera.jpg";

const About = () => {
  return (
    <div class="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Camera} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title"> About me</h1>
        <p className="about-sub"> </p>
        <p className="about-desc">
          {" "}
          I was born and raised in Hanoi, the capital city of Vietnam. At the
          age of 19, I came to the US to pursue higher education.
        </p>
        <p></p>

        <p className="about-desc">
          During the summer of 2018, before flying to the US, I spent my free
          time on building multiple simple web pages with html and css. I
          realized how exciting and fun coding was, which later on lead to my
          decision to choose studying Computer Science at college.{" "}
        </p>
        <p></p>
        <p className="about-desc">
          {" "}
          In my free time, I enjoy going outdoors and taking pictures. I take
          pictures to capture the memories of me and my friends. It is also a
          way to express my thoughts and feelings about people and things around
          me.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
