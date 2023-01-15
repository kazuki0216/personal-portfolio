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
            Github: kazuki0216
          </a>
        </h3>
        <h3>
          <a href="www.linkedin.com/in/kazuki-kagoshima">
            <FaLinkedin className="icons" />
            LinkedIn: Kazuki Kagoshima
          </a>
        </h3>
      </div>
    </>
  );
};

export default Ending;
