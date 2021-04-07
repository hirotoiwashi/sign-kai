import React from 'react';
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
                <li className="about">
                <p>概要</p>
                </li>

                <li className="privacy">
                <p>プライバシーポリシー</p>
                </li>

                <li className="contact">
                <p>お問い合わせ</p>
                </li>

                <li className="payment">
                <p>お支払い方法について</p>
                </li>

                <li className="shipping">
                <p>送料について</p>
                </li>

                <li className="qaf">
                <p>QAF</p>
                </li>
            </ul>

            <p className="credit">nojiri @ 2021</p>
            </div>
        </footer>
      );
    }
  }
  
  export default Footer;
  