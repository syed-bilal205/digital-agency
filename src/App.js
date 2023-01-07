import React , { useState , useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Ui/Hero';
import Counter from './components/Ui/Counter';
import Services from './components/Ui/Services';
import About from './components/Ui/About';
import Team from './components/Ui/Team';
import Blog from './components/Ui/Blog';
import Testimonical from './components/Ui/Testimonical';
import NewsLetter from './components/Ui/NewsLetter';
import Footer from './components/Ui/Footer';
import './App.css';

function App() {

  const [theme,setTheme] = useState('')

  const toggleTheme = () =>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Hero theme={theme}/>
      <Counter/>
      <Services/>
      <About/>
      <Team/>
      <Blog/>
      <Testimonical/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
