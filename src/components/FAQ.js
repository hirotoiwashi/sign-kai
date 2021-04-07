import React, {useEffect} from 'react';
import './styles/FAQ.css';

const FAQ = () => {

    //表示された時にトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div className="faq-page-wrapper">
            <div className="faq-page-container">
                <h2 className="faq-page-title">よくある質問</h2>
                <p className="faq-page-title2">FAQ</p>
                <div  className="faq-page-content">
                    <div className="faq-content-title">
                        <h2>Q</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="faq-content-answer">
                        <h2>A</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;