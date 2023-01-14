import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./Contact.css";
const Ending = () => {
  return (
    <>
      <div className="contact-info">
        <h2>Contact Info</h2>
        <h3>
          <FaGoogle className="icons" />
          Kazukikagoshima2@gmail.com
        </h3>
        <h3>
          <a href="https://github.com/kazuki0216">
            <FaGithub className="icons" />
          </a>
          Github: kazuki0216
        </h3>
        <h3>
          <a href="linkedin.com/in/kazuki-kagoshima-629b0a236">
            <FaLinkedin className="icons" />
          </a>
          LinkedIn: Kazuki Kagoshima
        </h3>
      </div>
    </>
  );
};

export default Ending;
