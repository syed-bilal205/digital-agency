import React from 'react'
import '../../styles/NewsLetter.css'

const NewsLetter = () => {
  return (
    <>
      <div className='newsLetter'>
        <div className='newsLetterMain'>
          <div className='newsLetterChildFirst'>
            <h6 className="subtitle">Let's work</h6>
            <h2>Explore the <span className="highlight">hidden</span><br /> ideas and subscribe!</h2>
          </div>
          <div className='newsLetterChildSec'>
            <input type="email" placeholder='Email' />
            <button className="secondary__btn secondary">subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
