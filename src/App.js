import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Hello from "./component/Hello";
import ProductCatalog from './component/ProductCatalogComponents/ProductCatalog';

function App() {
  return (
    <div>
        <Header />
       <Hello />
       <ProductCatalog />
    </div>
  );
}

export default App;
