import React from "react";
import "../../styles/Services.css";

const serviceData = [
    {
        icon:'ri-apps-line',
        title:'App Development',
        desc:`Lorem ipsum dolor sit, service__itemservice__item In,
        dolore. Animi sunt, sequi quae debitis illum enim dolorem nobis
        rerum.`
    },
    {
        icon:'ri-code-line',
        title:'Web Development',
        desc:`Lorem ipsum dolor sit, service__itemservice__item In,
        dolore. Animi sunt, sequi quae debitis illum enim dolorem nobis
        rerum.`
    },
    {
        icon:'ri-landscape-line',
        title:'Graphic Design',
        desc:`Lorem ipsum dolor sit, service__itemservice__item In,
        dolore. Animi sunt, sequi quae debitis illum enim dolorem nobis
        rerum.`
    },
    {
        icon:'ri-rocket-line',
        title:'Digital Marketing',
        desc:`Lorem ipsum dolor sit, service__itemservice__item In,
        dolore. Animi sunt, sequi quae debitis illum enim dolorem nobis
        rerum.`
    },
]

const Services = () => {
  return (
    <>
      <section id="service">
        <div className="container">
          <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2>Save time managing your bussiness with</h2>
            <h2 className="highlight">Our best Services</h2>
          </div>
          <div className="service__item-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="service__item" key={index}>
                        <span className="service__icon">
                        <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">
                {item.desc}
              </p>
            </div>
                    ))                    
                }        
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
