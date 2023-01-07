import React,{useRef , useEffect} from "react";
import "../Header/Header.css";
const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const headerFunc =()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header__shrink')
    }else{
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', headerFunc)
    return()=>window.removeEventListener('scroll',headerFunc)
  },[])

  const toggleMenu = () =>menuRef.current.classList.toggle("menu__active");
  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="nav__wrapper">
            <div className="logo">
              <h2>Digital Agency</h2>
            </div>
            {/* ==========navigation======== */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="menu__item" key={index}>
                    <a href={item.path} className="menu__link">
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* ======light mode======== */}
            <div className="light__mode">
              <span onClick={toggleTheme}>
                {theme === "light-theme" ? (
                  <span>
                    <i class="ri-moon-line"></i>Dark Mode
                  </span>
                ) : (
                  <span>
                    <i class="ri-sun-line"></i>Light Mode
                  </span>
                )}
              </span>
            </div>
            {/* ==========mobile menu============== */}
            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
