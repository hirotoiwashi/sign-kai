import React from 'react';
import {Link} from 'react-router-dom';
import './styles/App.css';





class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        
      };
    }
    
  
    
  
  
    render() {
      return (
        <footer>
            <div className="footer-container">
            <ul className="footer-contents">
              <Link to="/about" className="footer-link">
                <li className="about">
                <p>概要</p>
                </li>
              </Link>

              <Link to="/privacy-policy" className="footer-link">
                <li className="privacy">
                <p>プライバシーポリシー</p>
                </li>
              </Link>


              <Link to="/contact" className="footer-link">
                <li className="contact">
                <p>お問い合わせ</p>
                </li>
              </Link>

              <Link to="/payment" className="footer-link">
                <li className="payment">
                <p>お支払い方法について</p>
                </li>
              </Link>

              <Link to="/shipping" className="footer-link">
                <li className="shipping">
                <p>送料について</p>
                </li>
              </Link>

              <Link to="/faq" className="footer-link">
                <li className="qaf">
                <p>FAQ</p>
                </li>
              </Link>
            </ul>

            <p className="credit">nojiri @ 2021</p>
            </div>
        </footer>
      );
    }
  }
  
  export default Footer;
  