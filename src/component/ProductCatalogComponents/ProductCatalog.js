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
    return (
        <div className="container">
            <ul>
                {entities.map(product => <li>{product.name}</li>)}
            </ul>
        </div>
    );
}

export default ProductCatalog;
