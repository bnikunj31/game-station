import React from 'react'
import '../styles/section-styles/Section1.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Prevbtn = (props)=>{
    const { className, onClick } = props;
    return (
    <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-left prevbtns"></i>
    </div>
)
}

const Nextbtn = (props)=>{
    const { className, onClick } = props;
    return (
    <div className={className} onClick={onClick}>
        <i className="fa-solid fa-chevron-right nextbtns"></i>
    </div>
)
}

var settings = {
    autoplay : true,
    autoplaySpeed :2100,
    initialSlide : 0,
    dots : true,
    infinite : true,
    dotsClass : 'slick-dots dots',
    prevArrow : <Prevbtn/>,
    nextArrow : <Nextbtn/>,
}
export default function Section1() {
    return (
        <div className='section1'>
            <div className="section1-container">
            <Slider { ...settings }>
                <div className="h1 h">
                    <div className="homecontent ">
                        <h5>Dead Space</h5>
                        <p >Dead Space a Science Fiction/Horror Game.</p>
                        <button className='carousel-btn'><a href="/"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;GRAB IT</a></button>
                    </div>
                </div>
                <div className="h2 h">
                    <div className="homecontent">
                        <h5>FIFA 22</h5>
                        <p>FIFA 22 a Football Simulation Game.</p>
                        <button className='carousel-btn'><a href="/"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;GRAB IT</a></button>
                    </div>
                </div>
                <div className="h3 h">
                    <div className="homecontent">
                        <h5>BattelField 2042</h5>
                        <p>BattleField 2042  a Multi-Player Game.</p>
                        <button className='carousel-btn'><a href="/"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;GRAB IT</a></button>
                    </div>
                </div>
                <div className="h4 h">
                    <div className="homecontent">
                        <h5>BattleGrounds Mobile India(BGMI)</h5>
                        <p>BGMI a Multiplayer/Multiple Game Maps.</p>
                        <button className='carousel-btn'><a href="/"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;GRAB IT</a></button>
                    </div>
                </div>
                <div className="h5 h">
                    <div className="homecontent">
                        <h5>GTA 6</h5>
                        <p>GTA VI an Open World Game With High Graphics.</p>
                        <button className='carousel-btn'><a href="/"><i class="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;GRAB IT</a></button>
                    </div>
                </div>
            </Slider>
        </div>
        </div>
    )
}
