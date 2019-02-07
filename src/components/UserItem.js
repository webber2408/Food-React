import React, {Component} from 'react';


class UserItem extends Component{
    

    render(){
        const {id,name,price} = this.props.item;

        return (
            <div style={basic_style}>
                <p>
                {name}
                <br/>
                <b>
                Price: {' '} {price}
                </b>
                <button style={btnStyle} onClick = {this.props.removeItem.bind(this,id)}>Remove From Cart</button>
                </p>
                
            </div>
        )
    }

}

const btnStyle = {
    backgroundColor: '#DC143C',
    color: '#fff',
    border: 'none',
    padding: '10px 12px',
    borderRadius: '2px',
    cursor: 'pointer',
    float: 'right'
}

const basic_style={
    backgroundColor: '#fff',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    width:'40vw',
    
}
export default UserItem;