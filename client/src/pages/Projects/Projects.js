import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
      <>
          <div className="project" id='projects'>
              <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Projects</h2>
              <hr/>
              <p className='pb-3 text-center'>
                  I developed a Morse Code Translator web application using HTML, CSS, and JavaScript, enabling real-time translation between Morse code and plain text with a user-friendly interface and responsive design. Additionally, I created Tailor Connect, a MERN stack application that connects users with tailors, incorporating features like user authentication, profile management. In both projects, I focused on delivering seamless user experiences and robust functionality through comprehensive testing and intuitive design. These projects demonstrate my ability to create practical and user-centric web applications using a variety of technologies.
        </p>
        <div className="row" id='ads'>
      
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front End</span>
                  <img src="https://i.postimg.cc/kXmNNNWH/Screenshot-2024-07-18-162336.png" alt='project1'/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Morse Code Translator
                    </h5>
                  </div>
                  <a className="ad-btn" href='https://github.com/Rahull012/morse.git'>View</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src="https://i.postimg.cc/6pwXNPnh/Screenshot-2024-07-18-162640.png" alt='project2'/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Tailor Connect Website
                    </h5>
                  </div>
                  <a className="ad-btn" href='https://github.com/Rahull012/tailorconnect.git'>View</a>
                </div>
              </div>
            </div>
        </div>
          </div>
        </>
  )
} 

export default Projects