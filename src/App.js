import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layouts/header';
import About from './components/pages/About';
import Cart from './components/Cart';
import User from './components/User';
import './App.css';

class App extends Component {

  state = {
    cart_items: [
      {
        id:1,
        name:"Biscuit",
        price:"10",
        purchased:false
      },
      {
        id:2,
        name:"Chips",
        price:"20",
        purchased:false
      },
      {
        id:3,
        name:"Chocolate",
        price:"30",
        purchased:false
      },
      {
        id:4,
        name:"Drinks",
        price:"40",
        purchased:false
      },
    ],

    user_cart_items:[]
  }

  // add to cart 
  addToCart = (id) => {
    //console.log(id);
    const newItem = this.state.cart_items.filter(item => item.id === id)[0];
    //console.log(typeof(this.state.user_cart_items));
    //console.log(typeof(newItem))
    newItem.purchased = true;
    this.setState(prevState => ({
      cart_items : [...prevState.cart_items],
      user_cart_items : [
        ...prevState.user_cart_items,
        newItem
      ]
    }), function(){
      //console.log(this.state);
    });
    
    
  }


  //remove item from user_cart_items
  removeItem = (id) => {
    //console.log(id)
    const cartItems = [...this.state.cart_items]
    cartItems.forEach((item) => {
      if(item.id === id){item.purchased = false}
    })
    //console.log(cartItems)
    
    
    this.setState(prevState => ({
      cart_items: cartItems,
      user_cart_items: [...this.state.user_cart_items.filter(item => item.id !== id)]
    }))
  }


  render() {
    return (

      <Router>
          <div className = "App">
            <Header />
            <Route exact path = "/" render={ele => (
              <React.Fragment>
                <div className="mainDiv">
                    <div>
                        <Cart cart_items = {this.state.cart_items} addToCart = {this.addToCart}/>  
                    </div>
                    <div>
                        <User added_items = {this.state.user_cart_items} removeItem = {this.removeItem}/>
                    </div>
                    
                </div>
                
              </React.Fragment>
            )}/>
            <Route path="/about" component = {About}/>
          </div>
      </Router>
      
    );
  }
}


export default App;
