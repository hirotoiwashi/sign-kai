import React from 'react';
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




class HeaderBeforeLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }

    toggleMenu = () => this.setState({isMenuOpen: !this.state.isMenuOpen});

    render() {
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
              <label htmlFor="menu-trigger" className="menu-trigger-label" onClick={this.toggleMenu}>
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
                pose={this.state.isMenuOpen ? 'open' : 'close'}></SubmenuBack>

              <Submenu
                className="submenu"
                pose={this.state.isMenuOpen ? 'open' : 'close'}>
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
}

export default HeaderBeforeLogin;