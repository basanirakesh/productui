//import "./ProductGroup.css";
import React from "react";

function ProductGroup({groupName, products}) {

    return (
        <>
            <li><b>{groupName} | {products.length}</b></li>
            <ul>
                {products.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        </>
    );
}

export default ProductGroup;
