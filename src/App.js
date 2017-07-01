import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import AddProduct from './components/addProduct';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  getProducts(){
    this.setState({products: [{
        name: 'honey suckle scented candle',
        category: 'home decor',
        stock: '35',
        weight: '3.5 lbs',
        location: 'store_1'
      },
      {
        name: 'half-enclosed globe',
        category: 'home decor',
        stock: '35',
        weight: '10 lbs',
        location: 'store_2'
      }]});
  }
  componentWillMount(){
    this.getProducts();
    }
  submitAddProduct(product){
    let products = this.state.products;
    products.push(product);
    this.setState({products:products});
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Inventory</h2>
        </div>
        <br/>
        Current Inventory:
        <AddProduct addProduct={this.submitAddProduct.bind(this)} />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
