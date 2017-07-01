import React, { Component } from 'react';
import ProductListItem from './productListItem';

class Products extends Component {
    render(){
        let productList;
        if(this.props.products){
            productList = this.props.products.map(product => {
                //console.log(product);
                return(
                    <ProductListItem key={product.name} product={product} />
                );
            });
        }
        return (
            <div className="Products">
            {productList}
            </div>
        );
    }
}
export default Products