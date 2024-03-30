import React from "react";
import WorkHeader from "../../components/Work-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <MainLayout>
       <WorkHeader
        center
        title={{
          first: "Contact Us",
        }}
        // title = "text",
        content="A holistic and innovative creative design studio based in Nepal especializing in architecture, interior design and landscape solutions. "
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
