import React from 'react'
import "./Menus.css"
import { FcHome } from "react-icons/fc";
import { FcAbout } from 'react-icons/fc';
import { FcBiotech } from 'react-icons/fc';
import { FcReadingEbook } from 'react-icons/fc';
import { FcVideoProjector } from 'react-icons/fc';
import { FcBusinessContact } from 'react-icons/fc';
import { Link} from 'react-scroll';
import Rahul from '../../assets/docs/rahul.jpg';
const Menus = ({toggle}) => {
  return (
      <>
          {toggle ?
              (
              <>
                      <div className='navbar-profile-pic'>
                        <img src={Rahul} alt="profile-pic" />
                    </div>
                     
                      <div className='navbar-items'>
                          <div className='nav-item'>
                          <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome /> Home</Link></div>
                          <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link></div>
                          <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook />Education</Link></div>
                          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><FcBiotech />Tech Stack</Link></div>
                          <div className='nav-link'><Link to='projects' spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector />Projects</Link></div>
                          <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact />Contact</Link></div>
                          </div>
                      </div>        
              </>
              )
              :
              (
                  <>
                      <div className='navbar-items'>
                          <div className='nav-item'>
                          <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome /> </Link></div>
                          <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/></Link></div>
                          <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook /></Link></div>
                          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><FcBiotech /></Link></div>
                          <div className='nav-link'><Link to='projects' spy={true} smooth={true} offset={-100} duration={100}><FcVideoProjector /></Link></div>
                          <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcBusinessContact /></Link></div>
                          </div>
                      </div>     
                  </>
              )
          }
    </>
  )
}

export default Menus