import React from "react";
import "../../styles/Footer.css";

const quickLinks = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Commerce'
    },
]

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <h2>Digital Agency</h2>
              <p className="description">Grow with us</p>
              <p className="small__text description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis, hic.
              </p>
              </div>
              <div className="footer__quick-links">
                <h3 className="quick__links-title">solution</h3>
                <ul className="quick__links">
                    {
                        quickLinks.map((item)=>(
                            <li key={item.display} className="quick__links-item"><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
              </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
