import React from 'react';
import './CartItem.css';

class CartItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        }

        this.handleDel = this.handleDel.bind(this);
    }

    handleDel(id) {
        let index = this.state.items.findIndex((item)=>item.id===id);
        this.state.items.splice(index,1);

        this.setState({items: this.state.items});
    }

    

    render() {
        return (
            <div>
                {this.state.items.map((item)=><CartItem item={item} key={item.id} delAllItem={this.handleAllDel} delItem={this.handleDel} />)}
                {/* <Purchase /> */}
            </div>
        )
    }
}

class CartItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: this.props.item.image,
            name: this.props.item.name,
            price: this.props.item.price,
            num: this.props.item.num,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleChange(e) {
        const newNum = Number(e.target.value);
        this.setState({num: newNum});
    }

    handleDel() {
        const id = this.props.item.id;
        this.props.delItem(id);
    }

    render(){
        const allPrice = this.state.price * this.state.num;
        const options = [...Array(10)].map((_,i) => i);
        const optionElement = options.map((option)=><option value={option.toString()} >{option}</option>)
        return(
            <div className="cart-item">
                <div className="product-image">
                    <img src={this.state.image} className="product-img"></img>
                </div>
                <div className="imformation">
                    <p>{this.state.name}</p>
                    <p>{this.state.price}円</p>
                    <label>個数:</label>
                    <select onChange={this.handleChange} value={this.state.num}>{optionElement}</select>
                    <span className="delete" onClick={this.handleDel}>削除する</span>
                </div>
                <div className="price">
                    <p>{allPrice}</p>
                </div>
            </div>
        );
    }
}

class Purchase extends React.Component {
    
}

export default CartItems