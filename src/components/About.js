import React, {useEffect} from 'react';
import './styles/About.css';

const About = () => {

    //表示された時にトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div className="about-page-wrapper">
            <div className="about-page-container">
                <h2 className="about-page-title">ネットサイン会とは</h2>
                <p className="about-page-title2">ABOUT NetSignKai</p>
                <div  className="about-page-content">
                    <h2>ネットサイン会とは？</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default About;