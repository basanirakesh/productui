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
        dispatch(fetchUserProducts());
    }, [dispatch])
    const {loading, entities} = useSelector(selectProducts);
    const groups = groupByName(entities);
    return (
        <div className="container">
            <h4>Products</h4>
            <ul>
                {Object.keys(groups).map(groupName =>
                    <ProductGroup key={groupName} groupName={groupName} products={groups[groupName]}/>)
                }
            </ul>
        </div>
    );
}

export default ProductCatalog;
