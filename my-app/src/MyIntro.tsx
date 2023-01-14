import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Intro.css";

const MyIntro = () => {
  let imageUrls = [
    "https://i.postimg.cc/3x6xrWfF/IMG-6064.jpg",
    "https://i.postimg.cc/d1CkcGqC/C0-BE547-A-4-D4-B-431-A-AA6-D-CB1-DDDFA59-CB.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImage(
          currentImage === imageUrls[0] ? imageUrls[1] : imageUrls[0]
        );
        setFadeIn(true);
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <>
      <div className="Intro">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <div className="life-intro">
            <h3>
              I'm a 23 year old Full-Stack <br />
              software developer based in Japan
            </h3>
            <div className="designs-7"></div>
            <div className="designs-6"></div>
            <div className="designs-5"></div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
              <h4>
                I lived in California for a couple of years as a kid, <br />
                and have been involved with American culture for all of my life,{" "}
                <br />
                So I am a native English and Japanese speaker 🇯🇵🇺🇸
              </h4>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={4}>
          <p>
            On July 2021, I decided to become a software engineer <br />
            after recieving great inspiration from my job as an IT consultant.{" "}
            <br />I had the previlige to interact with great engineers from all
            over the world. <br />
            During that experience, I saw people developing life changing
            services that ultimately impacted
            <br />
            the lives of many. From those days forward, I knew that I wanted to
            be a part of developing meaningful software.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="rotateIn" animateOnce={true}>
          <h2>
            In order to make my dream of becoming a software engineer come
            true...
          </h2>
        </ScrollAnimation>
        <div className="body-img">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <img src="https://i.postimg.cc/3x6xrWfF/IMG-6064.jpg" alt="" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <img
              src="https://i.postimg.cc/d1CkcGqC/C0-BE547-A-4-D4-B-431-A-AA6-D-CB1-DDDFA59-CB.jpg"
              alt=""
            />
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="closing">
            <h6>
              I decided to enroll in a coding bootcamp @
              <a href="https://www.codechrysalis.io/en/immersive-full-time?utm_term=code%20chrysalis&utm_campaign=Coding+Bootcamp+%5BEN%5D+%5B202001%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=8664002662&hsa_cam=1642496772&hsa_grp=63515693900&hsa_ad=343938013353&hsa_src=g&hsa_tgt=aud-910551725976:kwd-571283697294&hsa_kw=code%20chrysalis&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA_P6dBhD1ARIsAAGI7HCIWFrS0qdOE8eKLpet9wltDDQdhe6XTCXVQ2is1fYslSwP4-aeefMaAjn7EALw_wcB">
                Code Chrysalis.
              </a>{" "}
              <br />
              Through that experience, I was able to reaffirm my passion and
              love for coding. <br />
              I was amazed by the endless possibilities of what you can achieve
              with coding. <br />
              In the future, I aspire to be involved in the developing services
              that will have a positive impact on a global scale.
              <br />
              My goal is to make a meaningful and global impact through the
              services and projects I contribute to.
            </h6>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default MyIntro;
