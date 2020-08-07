//import "./ProductGroup.css";
import React, { Component } from "react";

class ProductGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catalogProductList: props.entry
        }
    }

    
  render() {
      let productList = [];
      productList = this.state.catalogProductList.map((entry, index) => {
        productList.add(<li>{entry.name}</li>);
        }); 
          return (
              <ul>
                  {productList}
              </ul>
          );
      );
  }
}

export default ProductGroup;
