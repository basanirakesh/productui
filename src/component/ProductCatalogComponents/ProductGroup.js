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
      this.state.catalogProductList.map((entry, index) => {
        productList.push(<li>{entry.name}</li>);
        }); 
          return (
              <ul>
                  {productList}
              </ul>
          );
     
  }
}

export default ProductGroup;
