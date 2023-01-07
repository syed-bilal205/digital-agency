import React from 'react'
import '../../styles/NewsLetter.css';


const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="nesletter__content">
                    <h6 className="subtitle">Let's work</h6>
                    <h2>Explore the <span className="highlight">hidden</span>ideas and subscribe!</h2>
                </div>
                <div className="newsletter__form">
                    <input type="email" placeholder='Email' />
                    <button className="secondary__btn">subscribe</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default NewsLetter
