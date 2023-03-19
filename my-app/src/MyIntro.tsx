import { useEffect } from "react";
import "./Intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="Intro">
        <div className="life-intro">
          <h2>ABOUT <FontAwesomeIcon icon={faUser} className="user-icon"/></h2>
          <h3>
            I lived in California for a couple of years as a kid, <br />
            and have been involved with American culture for all of my life,{" "}
            <br />
            So I am a native English and Japanese speaker 🇯🇵🇺🇸
          </h3>
        </div>
        <p>
          On July 2021, I decided to become a software engineer <br />
          after recieving great inspiration from my job as an IT consultant.{" "}
          <br />I had the previlige to interact with great engineers from all
          over the world. <br />
          During that experience, I saw people developing life changing services
          that ultimately impacted
          <br />
          the lives of many. From those days forward, I knew that I wanted to be
          a part of developing meaningful software.
        </p>
        <h2>
          In order to make my dream of becoming a software engineer come true...
        </h2>
        <div className="body-img">
          <div className="image-wrapper">
            <img src="https://i.postimg.cc/3x6xrWfF/IMG-6064.jpg" alt="" />
          </div>
          <div className="image-wrapper">
            <img
              src="https://i.postimg.cc/d1CkcGqC/C0-BE547-A-4-D4-B-431-A-AA6-D-CB1-DDDFA59-CB.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="closing">
          <h6>
            I decided to enroll in a coding bootcamp @
            <a href="https://www.codechrysalis.io/en/immersive-full-time?utm_term=code%20chrysalis&utm_campaign=Coding+Bootcamp+%5BEN%5D+%5B202001%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=8664002662&hsa_cam=1642496772&hsa_grp=63515693900&hsa_ad=343938013353&hsa_src=g&hsa_tgt=aud-910551725976:kwd-571283697294&hsa_kw=code%20chrysalis&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA_P6dBhD1ARIsAAGI7HCIWFrS0qdOE8eKLpet9wltDDQdhe6XTCXVQ2is1fYslSwP4-aeefMaAjn7EALw_wcB">
              Code Chrysalis.
            </a>{" "}
            <br />
            Through that experience, I was able to reaffirm my passion and love
            for coding. <br />
            I was amazed by the endless possibilities of what you can achieve
            with coding. <br />
            In the future, I aspire to be involved in the developing services
            that will have a positive impact on a global scale.
            <br />
            My goal is to make a meaningful and global impact through the
            services and projects I contribute to.
          </h6>
        </div>
      </div>
    </>
  );
};

export default MyIntro;
