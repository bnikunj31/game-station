import React from 'react'
import '../styles/section-styles/Section3.css'
export default function Section3() {
    return (
        <div className='section3'>
            <h1 className='section2-heading'>
                Latest Games
            </h1>
            <div className='card'>
                <div className='c1 c'>
                    <img className='section3-img' src='./img/alien-dark-descents.jpg' alt='Alien:Dark Descents'/>
                    <div className='info'>
                        <h5>Alien : Dark Descents</h5><br/>
                        <p className='c-p'>Alien : Dark Descents is one of the most intresting action-strategy game we,ve seen in quite some time.</p>
                    </div>
                </div>
                <div className='c2 c'>
                    <img className='section3-img' src='./img/re4.jpg' alt='Rerident Evil 4'/>
                    <div className='info'   >
                        <h5>Resident Evil 4</h5><br/>
                        <p className='c-p'>Resident Evil 4 is a remake of the original 2005 Resident Evil 4. Reimagined for 2023 to bring state-of-the-art survival horror.</p>
                    </div>
                </div>
                <div className='c3 c'>
                <img className='section3-img' src='./img/diablo4.jpg' alt='Diablo'/>
                    <div className='info'   >
                        <h5>Diablo</h5><br/>
                        <p className='c-p'>Diablo IV ia an action role-playing game developed and published by Blizzard Entertainment.</p>
                    </div>
                </div>
                <div className='c4 c'>
                <img className='section3-img' src='./img/AOW4.jpg' alt='Age of Wonders 4'/>
                    <div className='info'>
                        <h5>Age of Wonders 4</h5><br/>
                        <p className='c-p'>Age of Wonders 4 invites players to rule a fantasy realm of their own design, in a blend of strategy and role-playing.</p>
                    </div>
                </div>
                <div className='c5 c'>
                <img className='section3-img' src='./img/FF7.jpg' alt='Final Fantasy VII : Ever Crisis'/>
                    <div className='info'>
                        <h5>Final Fantasy VII : Ever Crisis</h5><br/>
                        <p className='c-p'>Final Fantasy VII : Ever Crisis is an upcoming role-playing  video game developed by Applibot and published by Square Enix.</p>
                    </div>
                </div>
                <div className='c6 c'>
                <img className='section3-img' src='./img/RRO.jpg' alt='Rush Rally Origins'/>
                    <div className='info'   >
                        <h5>Rush Rally Origins</h5><br/>
                        <p className='c-p'>Rush Rally Origins easily one of the best racers on the platform, with high FPS supports (i.e. 60FPS).</p>
                    </div>
                </div>
                <div className='c7 c'>
                <img className='section3-img' src='./img/cv.jpg' alt='Coco Valley : Farm Adventure'/>
                    <div className='info'   >
                        <h5>Coco Valley : Farm Valley</h5><br/>
                        <p className='c-p'>Coco Valleylley : Farm Adventure is a town building similator with farm simulator mechanics.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
