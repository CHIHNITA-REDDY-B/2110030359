import React, { Component } from 'react'
// import Home from './components/Home'
import './App.css';
import About from './components/About'
class App extends Component {
  render() {
    return (
    //   <center>
    //   <h1> 
    //   E-Commerce Companies
    //     </h1>
    // </center>
    // <h1>Displaying the top five e-commerce companies.</h1>
    // <div id="color">
    //   <home></home>
    // </div>
    
    
				<div id="colorlib-main">
					{/* <Home></Home> */}
					<About></About>
          	</div>
    );
  }
}

export default App;
