import React, { Component } from 'react';

class ProductListItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            <li className="Product">
            {this.props.product.name} : {this.props.product.stock}
            </li>
            </div>
        );
    }
}
export default ProductListItem