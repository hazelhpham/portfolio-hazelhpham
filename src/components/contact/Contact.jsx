import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text">
        <div className="contact-title"> Contact</div>
        <div className="contact-sub"> Let's connect!</div>
      </div>
      <div className="contact-sm">
        <div className="contact-sm-item gmail">
          {" "}
          huong.pham87@myhunter.cuny.edu
        </div>
        <div className="contact-sm-item linkedin">
          {" "}
          https://www.linkedin.com/in/huongpham99/{" "}
        </div>

        <div className="contact-sm-item github">
          {" "}
          https://github.com/hazelhpham{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
