import React, {useEffect} from 'react';
import './styles/Shipping.css';

const Shipping = () => {

    //表示された時にトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div className="shipping-page-wrapper">
            <div className="shipping-page-container">
                <h2 className="shipping-page-title">送料について</h2>
                <p className="shipping-page-title2">Postage</p>
                <div  className="shipping-page-content">
                    <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <ul className="shipping-page-table">
                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li><h3>エリア</h3></li>
                                <li><h3>対象の都道府県</h3></li>
                                <li><h3>送料(円)</h3></li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>北海道</li>
                                <li>北海道</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>北東北</li>
                                <li>青森県 、秋田県 、岩手県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>南東北</li>
                                <li>宮城県 、山形県 、福島県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>関東</li>
                                <li>茨城県 、栃木県 、群馬県 、埼玉県 、千葉県 、神奈川県 、東京都 、山梨県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>信越</li>
                                <li>新潟県 、長野県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>中部</li>
                                <li>静岡県 、愛知県 、三重県 、岐阜県	</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>北陸</li>
                                <li>富山県 、石川県 、福井県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>関西</li>
                                <li>大阪府 、京都府 、滋賀県 、奈良県 、和歌山県 、兵庫県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>中国</li>
                                <li>岡山県 、広島県 、山口県 、鳥取県 、島根県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>四国</li>
                                <li>香川県 、徳島県 、愛媛県 、高知県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>九州</li>
                                <li>福岡県 、佐賀県 、長崎県 、熊本県 、大分県 、宮崎県 、鹿児島県</li>
                                <li>650</li>
                            </ul>
                        </li>

                        <li className="shipping-table-row">
                            <ul className="shipping-table-row-content">
                                <li>沖縄</li>
                                <li>沖縄県</li>
                                <li>650</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Shipping;