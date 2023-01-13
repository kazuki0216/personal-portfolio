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
            <h4>
              I have lived in California when I was young for a <br />
              couple of years, and I have been involved with English all of my
              life, <br />
              So I am a native English and Japanese speaker 🇯🇵🇺🇸
            </h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={4}>
          <p>
            I embarked on my journey with coding because I was deeply inspired
            by my previous role as an IT consultant. Through my interactions
            with software engineers from around the globe, I was struck by the
            incredible impact that their work had, and I was motivated to become
            a creator of services myself. I wanted to be a part of something
            bigger and more meaningful.
          </p>
        </ScrollAnimation>

        <h2>
          In order to make my dream of becoming a software engineer come true...
        </h2>
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
                Code Chrysalis
              </a>{" "}
              to further develop my skills and discovered a passion for coding.
              Through the program, I really fell in love with building
              full-stack applications and found great joy. In the future, I
              aspire to be involved in the creation of services that have a
              positive impact on the lives of many individuals. My goal is to
              make a meaningful and global impact through the services and
              projects I contribute to.
            </h6>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default MyIntro;
