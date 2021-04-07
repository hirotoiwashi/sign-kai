import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

//animation settings
const Submenu = posed.div({
    open: {
        x: '0px',
        transition: {
        x: {duration: 0, ease: 'linear'}
        }
    },
    close: {
        x: '250px',
        transition: {
        x: {duration: 0, ease: 'linear'}
        }
    }
});

const SubmenuBack = posed.div({
    open: {
        x: '0px',
        opacity: 1,
        transition: {
        x: {duration: 0},
        opacity: {duration: 600, ease: 'linear'}
        }
    },
    close: {
        x: '2000px',
        opacity: 0,
        transition: {
        x: {delay: 600, duration: 0},
        opacity: {duration: 600, ease: 'linear'}
        }
    }
});




const HeaderBeforeLogin = () => {

    const [isMenuOpen, setMenuState] = useState(false);

    const toggleMenu = () => setMenuState(!isMenuOpen);

    return(
        <header>
            <Link className="header-left" to="/">
            <div className="header-left-container">
              <i className="far fa-handshake"></i>
              <h1 className="header-left-name">Logo</h1>
            </div>
            </Link>

            <div className="header-right">
              <div className="subscribe">
                <i className="fas fa-user-plus"></i>
                <p>会員登録</p>
              </div>

              <Link className="login-btn-wrapper" to="/login">
                  <button className="login">
                    <i className="fas fa-sign-in-alt"></i>
                    <p>ログイン</p>
                  </button>
              </Link>

              <input type="checkbox" id="menu-trigger" />
              <label htmlFor="menu-trigger" className="menu-trigger-label" onClick={() => toggleMenu()}>
                <div className="menu-bar-wrapper">
                  <div className="menu-bar-container">
                    <div className="menu-bar">
                      <div className="bar-top"></div>
                      <div className="bar-mid"></div>
                      <div className="bar-bottom"></div>
                    </div>
                  </div>
                </div>
              </label>

              <SubmenuBack 
                className="submenu-background"
                pose={isMenuOpen ? 'open' : 'close'}></SubmenuBack>

              <Submenu
                className="submenu"
                pose={isMenuOpen ? 'open' : 'close'}>
                <ul>
                  <Link to="/payment" className="submenu-link-before"><li><button className="submenu-content sub-payment" onClick={() => toggleMenu()}>お支払い方法について</button></li></Link>
                  <Link to="/shipping" className="submenu-link-before"><li><button className="submenu-content sub-shipping" onClick={() => toggleMenu()}>送料について</button></li></Link>
                  <Link to="/privacy-policy" className="submenu-link-before"><li><button className="submenu-content sub-privacy" onClick={() => toggleMenu()}>プライバシーポリシー</button></li></Link>
                  <Link to="/faq" className="submenu-link-before"><li><button className="submenu-content sub-qaf" onClick={() => toggleMenu()}>よくある質問（FAQ）</button></li></Link>
                  <Link to="/contact" className="submenu-link-before"><li><button className="submenu-content sub-contact" onClick={() => toggleMenu()}>お問い合わせ</button></li></Link>
                </ul>
              </Submenu>
            </div>
          </header>
    );
}

export default HeaderBeforeLogin;