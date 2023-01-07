import React from "react";
import "../../styles/About.css";
import aboutImg from '../../images/about-us.jpg';

const chooseData = [
  {
    icon: "ri-wifi-fill",
    title: "First working process",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, accusamus suscipit! Error repellendus incidunt atque vitae! Ducimus sint consectetur iure?`,
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, accusamus suscipit! Error repellendus incidunt atque vitae! Ducimus sint consectetur iure?`,
  },
  {
    icon:"ri-customer-service-line",
    title: "24/7 support",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, accusamus suscipit! Error repellendus incidunt atque vitae! Ducimus sint consectetur iure?`,
  }
];

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__content">
              <h6 className="subtitle">Why Choose Us</h6>
              <h2>Specialist in aviding clients on</h2>
              <h2 className="highlight">finanical challenges</h2>
              <p className="description about__content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                error cupiditate voluptate repellat provident veritatis saepe.
                Ipsum vel aliquid tenetur debitis corrupti eum accusamus nobis
                at? Recusandae provident ipsum suscipit?
              </p>
              <div className="choose__item-wrapper">
              {
                chooseData.map((item,index)=>(
                    <div className="choose__us-item" key={index}>
              <span className="choose__us-icon">
                  <i class={item.icon}></i>
                </span>
                <h4 className="choose__us-title">{item.title}</h4>
                <p className="description">{item.desc}
                </p>
              </div>
                ))
              }
              </div>
            </div>
            <div className="about__img">
                <img src={aboutImg} alt="about Img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
