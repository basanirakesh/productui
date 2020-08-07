import React from 'react';
import './App.css';
import Header from "./component/Header";
import ProductCatalog from './component/ProductCatalogComponents/ProductCatalog';

function App() {
    return (
        <div>
            <Header/>
            <ProductCatalog/>
        </div>
    );
}

export default App;
