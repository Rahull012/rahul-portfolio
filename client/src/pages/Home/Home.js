import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/rahulresume.pdf';
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme=()=>{
    setTheme((prevState)=>prevState==='light'?'dark':'light');
  };
  return (
    <div className={`home-container ${theme}`} id='home'>
      <div className='theme-btn' onClick={handleTheme}>
        {theme==='light' ? (<BsFillMoonStarsFill size={30}/>):(<BsFillSunFill size={30}/>)}
      </div>
      <div className='home-content'>
        <h2>Hi 👋 I'm a</h2>
        <h1>
          <Typewriter
            options={{
              strings: ['Full Stack Developer!', 'Mern Stack Developer!'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className='home-buttons'>
          <button className='btn-hire'>Hire Me</button>
          <a className='btn-cv' href={Resume} download="resume.txt.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
