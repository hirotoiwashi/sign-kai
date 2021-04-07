import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import './styles/HeaderAfterLogin.css';

import {selectUsername, logout}  from '../features/users/usersSlice';


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




const HeaderAfterLogin = () => {
    const [isMenuOpen, setMenuState] = useState(false);

    const toggleMenu = () => setMenuState(!isMenuOpen);

    const username = useSelector(selectUsername);

    const dispatch = useDispatch();

    const onLogoutClicked = () => {
        dispatch(logout());
    }


    return(
        <header>
            <Link className="header-left" to="/">
            <div className="header-left-container">
              <i className="far fa-handshake"></i>
              <h1 className="header-left-name">Logo</h1>
            </div>
            </Link>

            <div className="header-mid">
                <h3>{username}さん、こんにちは</h3>
            </div>

            
            <div className="header-after-right">

              <Link className="cart-link" to="/cart">
              <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                <p>カート</p>
              </div>
              </Link>

              <Link className="logout-btn-wrapper" to="/">
                  <button className="logout" onClick={() => onLogoutClicked()}>
                    <i className="fas fa-sign-out-alt"></i>
                    <p>ログアウト</p>
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
                  <li><button className="submenu-content sub-payment">お支払い方法について</button></li>
                  <li><button className="submenu-content sub-shipping">送料について</button></li>
                  <li><button className="submenu-content sub-privacy">プライバシーポリシー</button></li>
                  <li><button className="submenu-content sub-qaf">よくある質問（FAQ）</button></li>
                  <li><button className="submenu-content sub-contact">お問い合わせ</button></li>
                </ul>
              </Submenu>
            </div>
          </header>
    );
}

export default HeaderAfterLogin;