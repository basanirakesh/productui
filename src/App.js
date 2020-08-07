import React from 'react';
import './App.css';
import Header from "./component/Header";
import ProductCatalog from './component/ProductCatalogComponents/ProductCatalog';
import ProductDetails from './component/ProductCatalogComponents/ProductDetails';

function App() {
    return (
        <div>
            <Header/>
            <ProductCatalog/>
            <br /><br /><br />
            <ProductDetails />
        </div>
    );
}

export default App;
