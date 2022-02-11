import Banner from "../components/banner";
import Albums from "../components/albums";
import IntroOverlay from "../components/introOverlay";
import { useEffect, useState } from "react";
import gsap from "gsap/all";
const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-down", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".album-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
const Home = () => {
  const [animationComplete, setAniamtionComplete] = useState(false);

  const completeAnimation = () => {
    setAniamtionComplete(true);
  };

  useEffect(() => {
    //On load timeline
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Albums />
    </>
  );
};

export default Home;
