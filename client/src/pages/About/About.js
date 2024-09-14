import React from 'react'
import './About.css'
import Rahul from '../../assets/docs/rahul.jpg';

const About = () => {
  return (
      <>
          <div className='about' id='about'>
              <div className='row'>
                  <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                      <img src={Rahul} alt='profile_pic'/>
                  </div>
                  <div className='col-md-6 about-content'>
                      <h1>About me</h1>
                      <p>
                          Hello! I'm Rahul, a passionate software developer with a strong foundation in Java, HTML, CSS, JavaScript, and SQL. I have a keen interest in algorithms, data structures, and web development. I've worked on various projects ranging from dynamic web applications to complex algorithms. Additionally, I enjoy solving competitive programming problems and continuously improving my coding skills.
                      </p>
                  </div>
              </div>
          </div>   
      </>
  )
}

export default About