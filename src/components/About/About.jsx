import React from 'react';
import profilePicture from '../../assets/avatar.jpg';
import "../About/about.scss";

function About() {
    return(
        <main className="aboutPage">
            <h2 className='aboutIntro'>About me</h2>
            <div className="aboutContent">
                <div className="picDiv">
                    <img src={profilePicture} className="profilePicture" alt="Picture of myself."></img>
                </div>
                <div>
                    <p className="aboutP1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Minus officiis eos reprehenderit nam dolor?
                     Quis praesentium animi deleniti ex similique nesciunt hic magnam facilis quaerat minus? 
                     Rem quasi pariatur voluptas.</p>
                </div>
            </div>
        </main>
    )
}

export default About;