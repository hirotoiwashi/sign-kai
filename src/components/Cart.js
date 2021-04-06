import React from 'react'; 
import ReactDOM from 'react-dom';
import './Cart.css';
import CartItems from './CartItem'
import Image1 from "./images/item-image1.jpg";
import Image2 from "./images/item-image2.jpg";

const items = [{
    image: Image1,
    name: "商品名1",
    id: 1,
    price: 1000,
    num: 3
},{
    image: Image2,
    name: "商品名2",
    id: 2,
    price: 2000,
    num: 4
}]

class Cart extends React.Component{

    constructor(){
        super()
        this.state = {
            items: items
        }

        this.handleAllDel = this.handleAllDel.bind(this);
    }

    handleAllDel() {
        this.setState({items: []});
    }

    render(){
        return(
            <div className="cart">
                <div className="cart-item-header">
                    <h1>カートです</h1>
                    <i onClick={this.handleAllDel}>全ての商品を削除する</i>
                    <p>価格</p>
                </div>
                <CartItems items={this.state.items} />
            </div>
        )
    }
}

export default Cart