//import "./ProductCatalog.css";
import React, { Component } from "react";
import ProductGroup from "./ProductGroup";

class ProductCatalog extends Component {

    constructor(props) {
        super(props);
        this.constants = new Constants();
        this.state = {
            catalogProductList = []
        };
    }

    componentDidMount() {
        this.setState({"catalogProductList":  this.sampleCatalog()});
    }

    sampleCatalog = () => {
        return [
            {
              "name": "Orange savings account",
              "group": "Saving",
              "id": "12"
            },
            {
              "name": "Bonus interest account",
              "group": "Saving",
              "productId": "13"
            },
            {
              "name": "Interest only",
              "group": "Mortgage",
              "id": "12"
            }
          ];
    }

  render() {
      let productGroup = [];
      productGroup = this.state.catalogProductList.map((entry, index) => {
        productGroup.add(<li><ProductGroup entry={entry}/></li>);
      }); 
        return (
        <div className="container">
            <ul>
                {productGroup}
            </ul>
        </div>
        );
  }
}

export default ProductCatalog;
