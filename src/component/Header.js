//import "./Header.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserProducts, selectProducts} from "../features/products";


function Header() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserProducts());
    }, [dispatch])
    const {loading, entities} = useSelector(selectProducts);
    return (
        <div className="container">
            {JSON.stringify(entities, null, 2)}
        </div>
    );
}

export default Header;
