import React, {useEffect} from 'react';
import './styles/Contact.css';

const Contact = () => {

    //表示された時にトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div className="contact-page-wrapper">
            <div className="contact-page-container">
                <h2 className="contact-page-title">お問い合わせ</h2>
                <p className="contact-page-title2">INQUIRY</p>
                <div  className="contact-page-content">
                    <p>メールアドレス</p>
                    <input type="text" />

                    <p>メールアドレス(再入力)</p>
                    <input type="text" />

                    <p>電話番号(半角数字、ハイフン(-)付きでご入力下さい。)</p>
                    <input type="text" />

                    <p>お名前</p>
                    <input type="text" />

                    <p>注文番号</p>
                    <input type="text" />

                    <p>お問い合わせ種別</p>
                    <select name="種別">
                        <option value=""></option>
                        <option value="1">Lorem ipsum</option>
                        <option value="2">Lorem ipsum</option>
                        <option value="3">Lorem ipsum</option>
                        <option value="4">Lorem ipsum</option>
                        <option value="5">Lorem ipsum</option>
                    </select>

                    <p>お問い合わせ内容</p>
                    <textarea />

                    <button>送信</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;