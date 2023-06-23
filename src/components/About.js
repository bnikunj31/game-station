import React from 'react'
import './styles/About.css'

export default function about() {
  return (
    <div className='about'>
      &nbsp;
      <div className="about-container">
        <img className='about-image' src='./img/me.jpg' alt='MyImage' />
        <div className='about-me'>
          <h1 id='about-name'>Nikunj Bansal</h1>
          <p>I'm a webdeveloper currently working alone. Also seeking a Job to do.</p>
          <p>I've completed BCA (Bachelor's of Computer Applications) from MAIMT(Maharaja Agrasen Institue of Managment and Technology) which come under Kurukshetra University.</p>
        </div>
      </div>
      <div>
            <h2 className='about-website'>What i have used in the website.</h2>
            <div className="progress-bar">
              <h3>HTML</h3>
              <div class="p-bar">
                <div class="p1 p">&nbsp;</div>
              </div>
            </div>
            <div className="progress-bar">
              <h3>CSS</h3>
              <div class="p-bar">
                <div class="p2 p">&nbsp;</div>
              </div>
            </div>
            <div className="progress-bar">
              <h3>React JS</h3>
              <div class="p-bar">
                <div class="p3 p">&nbsp;</div>
              </div>
            </div>
            <div className="progress-bar">
              <h3>Font-Awesome</h3>
              <div class="p-bar">
                <div class="p4 p">&nbsp;</div>
              </div>
            </div>
      </div>
    </div>
  )
}