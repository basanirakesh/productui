import React from "react";

function ProductLink({product}) {
    return (
        <div>
            <li key={product.id}>{product.name}</li>
        </div>
    );
}

export default ProductLink;