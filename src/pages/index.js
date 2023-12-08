import React from "react";
import Team2 from "../components/Team2";
import Video from "../components/Video";
import MainLayout from "../layouts/main";
import IntroWithVertical from "../components/Intro-with-vertical";
import IntroWithHorizontal from "../components/Intro-with-horizontal";
import AboutUs6 from "../components/About-Us6";
import Services3 from "../components/Services3";
import Portfolio2 from "../components/Portfolio2";
import Testimonials1 from "../components/Testimonials1";
import AboutUs8 from "../components/About-Us8";

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <IntroWithHorizontal />
      <Services3 bigTitle grid />
      <Portfolio2 />
      <AboutUs6 />
      <Video />
      <Team2 />
      <Testimonials1 bigTitle />
    </MainLayout>
  );
};

export default Home5;
