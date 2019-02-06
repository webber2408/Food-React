import React, {Component} from 'react';


class CartItem extends Component{
    getStyle = () => {
        return {
            backgroundColor: this.props.item.purchased ? '#87CEFA':'#fff',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            width:'40vw'
        }
    }

    render(){
        const {id,name,price} = this.props.item;

        return (
            <div style={this.getStyle()}>
                <p>
                {name}
                <br/>
                <b>
                Price: {' '} {price}
                </b>
                <button style={btnStyle}>Add To Cart</button>
                </p>
                
            </div>
        )
    }

}

const btnStyle = {
    backgroundColor: '#008000',
    color: '#fff',
    border: 'none',
    padding: '10px 12px',
    borderRadius: '2px',
    cursor: 'pointer',
    float: 'right'
}
export default CartItem;