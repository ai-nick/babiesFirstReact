import React, { Component } from 'react';

class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            newProduct: {}
        }
    }
    static defaultProps = {
        categories: ['home decor', 'appliance'],
        stores: ['store_1', 'store_2']
    }

    
  submitProduct(x){
    if(this.refs.name.value === ''){
      alert('Product name is required');
    } else {
      this.setState({newProject:{
        name: this.refs.name.value,
        category: this.refs.category.value,
        store: this.refs.store.value,
        weight: this.refs.weight.value,
        stock: this.refs.stock.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    x.preventDefault();
}

    render() {
        let catOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>category</option>
        });
        let storeOptions = this.props.stores.map(store => {
            return <option key={store} value={store}>stores</option>
        });
    return (
              <div>
    <h3>Add Project</h3>
    <form onSubmit={this.submitProduct.bind(this)}>
        <div>
            <label>Name</label><br />
            <input type="text" ref="name" />
        </div>
                <div>
            <label>Stock</label><br />
            <input type="text" ref="stock" />
        </div>
                <div>
            <label>Weight</label><br />
            <input type="text" ref="weight" />
        </div>
        <div>
            <label>Category</label><br />
            <select ref="category">
                {catOptions}
            </select>
        </div>
                <div>
            <label>Store</label><br />
            <select ref="store">
                {storeOptions}
            </select>
        </div>
        <br />
        <input type="submit" value="Submit" />
        <br />
    </form>
</div>

    );
}
}
export default AddProduct;