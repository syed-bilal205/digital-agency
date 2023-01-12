import React from "react";
import "../../styles/Hero.css";
import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/light-hero-bg.jpg';

const Hero = ({theme}) => {
  return (
    <>
      <section className="hero__section">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <div>
                <h2 className="heroHeading">We're Creating Perfect</h2>
                <h2 className="heroHeading">Digital Products To</h2>
                <h2 className="highlight">Promote Your Brand</h2>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis neque unde quas excepturi earum minus maiores
                impedit quia quisquam odio!
              </p>
              <div className="hero__btns">
                <button className="primary__btn">Get Started Now</button>
                <button className="secondary__btn">Discover More</button>
              </div>
            </div>
            <div className="hero__img">
                <img src={theme === 'light-theme' ? lightImg :heroDarkImg} alt="hero images" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
