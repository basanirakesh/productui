import React from "react";

//TODO use react-router's Link component
function ProductLink({product}) {
    return (
        <div>
            <li key={product.id}><a href={`/products/${product.id}`}>{product.name}</a></li>
        </div>
    );
}

export default ProductLink;