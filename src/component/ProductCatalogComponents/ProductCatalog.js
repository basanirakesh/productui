//import "./ProductCatalog.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProducts, selectProducts} from "../../features/products";
import ProductGroup from "./ProductGroup";

function groupByName(products) {
    return products.reduce((groups, item) => {
        if (!groups.hasOwnProperty(item.group)) {
            groups[item.group] = [];
        }
        groups[item.group].push(item);
        return groups;
    }, {});
}

function ProductCatalog() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserProducts(1));
    }, [dispatch])
    const {entities} = useSelector(selectProducts);
    const productGroups = groupByName(entities);
    return (
        <div className="container">
            <h4>Products</h4>
            <ul>
                {Object.keys(productGroups).map(groupName =>
                    <ProductGroup key={groupName} groupName={groupName} products={productGroups[groupName]}/>)
                }
            </ul>
        </div>
    );
}

export default ProductCatalog;
