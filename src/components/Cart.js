import React, {Component} from 'react';
import CartItem from './CartItem';

class Cart extends Component{

    render(){
        console.log(this.props.cart_items);

        return this.props.cart_items.map((item) => (
            <CartItem key={item.id} item={item}/>
        ));
    }

}

export default Cart;