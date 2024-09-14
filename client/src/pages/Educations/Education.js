import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
    <div className='education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
        <hr/>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021- present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Technology,Computer Science and Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">CMR College Of Engineering And Technology</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019-2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate,MPC</h3>
    <h4 className="vertical-timeline-element-subtitle">Narayana Junior College</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018-2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Secondary School,SSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Bhashyam High School</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
    </>
  )
}

export default Education