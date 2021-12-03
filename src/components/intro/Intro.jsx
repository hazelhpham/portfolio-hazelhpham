import React from "react";
import "./intro.css";
import Me from "../../img/me.jpg";
const intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-text"> Hello, my name is </h2>
          <h1 className="intro-name"> Hazel Huong Pham. </h1>

          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item"> Aspiring Web Developer</div>
              <div className="intro-title-item"> Life-time learner </div>
              <div className="intro-title-item"> Creator</div>
              <div className="intro-title-item"> Explorer</div>
            </div>
          </div>
          <div className="intro-desc">
            I am a Computer Science and Math student at the City University of
            New York - Hunter College. My focus is on designing and developing
            websites.
          </div>
        </div>

        {/* <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          xmlns="http://www.w3.org/2000/svg"
          className="intro-scroll"
        >
          <g id="scroll">
            {" "}
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="30"
            />{" "}
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              {" "}
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </g>
        </svg> */}
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} className="intro-image" alt="profile picture"></img>
      </div>
    </div>
  );
};

export default intro;
