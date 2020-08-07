//import "./ProductGroup.css";
import React, {useState} from "react";
import ProductLink from "./ProductLink";

function ProductGroup({groupName, products}) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <li onClick={() => setVisible(!visible)} style={{cursor: "pointer"}}>
                <b>{groupName} | {products.length}</b>
            </li>
            {visible && <ul>
                {products.map(product => <ProductLink key={product.id} product={product}/>)}
            </ul>
            }
        </div>
    );
}

export default ProductGroup;
