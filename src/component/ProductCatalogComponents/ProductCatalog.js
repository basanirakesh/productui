//import "./ProductCatalog.css";
import React, { Component } from "react";
import ProductGroup from "./ProductGroup";

class ProductCatalog extends Component {

    constructor(props) {
        super(props);
        //this.constants = new Constants();
        this.state = {
            productList: [],
            catalogList: {}
        };
    }

    componentDidMount() {
        this.processCatalogResponse(this.sampleCatalog());
    }

    processCatalogResponse = (catalogResponse) => {
        catalogResponse.forEach((v, i, arr) => {
            if (v.group in this.state.catalogList) {
                let catalogList = this.state.catalogList;
                catalogList[v.group].push(v);
                this.setState({"catalogList": catalogList});
            } else {
                catalogList[v.group] = [];
                catalogList[v.group].push(v);
                this.setState({"catalogList": catalogList});
            }
        });
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
              "id": "13"
            },
            {
              "name": "Interest only",
              "group": "Mortgage",
              "id": "14"
            }
          ];
    }

  render() {
      let productGroupKV = [];
      Object.keys(catalogList).forEach((v, i, arr) => {
        productGroupKV.push({key: v, value: this.catalogList[v]});
      });
      productGroup = this.productGroupKV.map((entry, index) => {
        return productGroup.push(<li><br />{entry.group}<br /><ProductGroup entry={entry}/></li>);
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
