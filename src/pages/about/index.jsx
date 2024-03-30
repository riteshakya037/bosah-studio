import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Process2 from "../../components/Process2";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";
import AfterBefore from "../../components/After-Before";
import WorkHeader from "../../components/Work-header";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
       <WorkHeader
        center
        title={{
          first: "About Us",
        }}
        // title = "text",
        content="A holistic and innovative creative design studio based in Nepal especializing in architecture, interior design and landscape solutions. "
      />
      <AboutUs4 />
      <Services3 bigTitle grid />
      <Process2 bigTitle />
      <AfterBefore bigTitle />
      <Team2 />
      <Testimonials1 bigTitle />
    </MainLayout>
  );
};

export default About;
