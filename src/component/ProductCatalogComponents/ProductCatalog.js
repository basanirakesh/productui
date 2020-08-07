//import "./ProductCatalog.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProducts, selectProducts} from "../../features/products";

function ProductCatalog() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserProducts());
    }, [dispatch])
    const {loading, entities} = useSelector(selectProducts);
    const groups = entities.reduce((groups, item) => {
        if (!groups.hasOwnProperty(item.group)) {
            groups[item.group] = [];
        }
        groups[item.group].push(item);
        return groups;
    }, {});
    return (
        <div className="container">
            <h4>Products</h4>
            <ul>
                {Object.keys(groups).map(groupName => <li>{groupName} | {groups[groupName].length}</li>)}
            </ul>
        </div>
    );
}

export default ProductCatalog;
