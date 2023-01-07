import React from "react";
import "../../styles/Testimonical.css";
import Slider from "react-slick";
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const testimonialData =[
    {
        imgUrl:ava01
    },
    {
        imgUrl:ava03
    },
    {
        imgUrl:ava02
    }
]

const Testimonical = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true
      };

  return (
    <>
      <section>
        <div className="container">
            <div className="slider__content-top">
            <h6 className="subtitle">Testimonials</h6>
            <h2>Trusted by More than <span className="highlight">5,000 customers</span></h2>
            </div>
            <div className="slider__wrapper">
            <Slider {...settings}>
            {
                testimonialData.map((item,index)=>(
                    
          <div className="slider__item" key={index}>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              veniam, fuga odit saepe nostrum mollitia nesciunt explicabo
              praesentium corrupti repudiandae facere. Rem provident
              consequuntur libero fugit, exercitationem enim hic tempore minima
              illo atque voluptates facere suscipit dignissimos unde eaque
              ipsum.
            <div className="customer__details">
                <div className="customer__img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <div>
                    <h5 className="customer__name">Jhon Doe</h5>
                    <p className="description">CEO, Workcreation</p>
                </div>
            </div>
            </p>
          </div>
        
                ))
            }
            </Slider>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonical;
