import React from "react";
import '../Landing/landing.css';
import { Link } from "react-router-dom";
import image from '../../assets/mundo_flotando.jpg';
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
                <img src={image} alt="ImageWorld" />
            </div>
        </div>
    );
}

export default Landing;