import React from 'react'
import '../styles/section-styles/Section2.css'
export default function section22() {
  return (
    <div className='section2'>
      <div className="section2-container">
        <div className="section2-heading">Top Games</div>
        <div className="section2-box">
            <div className="section2-child-container">
              <div className="section2-subchild-container">
                <div className="section2-content">
                  <div>
                    <p className="sec2-title">Action Game</p>
                    <img className="sec2-img" src="./img/gta5.jpg" alt="" /></div>
                  </div>
                <div className="section2-content">
                  <div>
                    <p className="sec2-title">Adventure Game</p>
                    <img className="sec2-img" src="./img/minecraft.jpg" alt="" />
                  </div>
                </div>
                <div className="section2-content">
                  <div>
                    <p className="sec2-title">Survival Game</p>
                    <img className="sec2-img" src="./img/re4.jpg" alt="" />
                  </div>
                </div>
                <div className="section2-content">
                <div>
                    <p className="sec2-title">Multi-Player Game</p>
                    <img className="sec2-img" src="./img/cod.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}