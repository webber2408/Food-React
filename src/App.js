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
        purchased:true
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
    ]
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
                        <Cart cart_items = {this.state.cart_items}/>  
                    </div>
                    <div>
                        <User added_items = {this.state.cart_items} />
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
