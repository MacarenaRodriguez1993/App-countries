import React from "react";
import '../Landing/landing.css';
import { Link } from "react-router-dom";
import image from '../../assets/mundo_flotando.jpg';
import video from '../../assets/gif.mp4'
function Landing(){

    return(
        <div className="landing">
            <div className="title">
                <h1>Welcome to the world</h1>
                <Link to='/home'>
                    <button className="initial">Start experience</button>
                </Link>
                
            </div>
            <div className="image">
                
                <video src={video} autoplay ></video>
            </div>
        </div>
    );
}

export default Landing;