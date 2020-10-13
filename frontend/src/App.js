import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">LOCAL TRADING</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3 className="sidebar-title">Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Fruites</a>
                </li>

                <li>
                    <a href="index.html">Vegetables</a>
                </li>
            </ul>
        </aside>
      
        <main className="main">
            <div className="content">
                <Route path="/products/:id" component={ProductScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
 
                
            </div>    
        </main>
        <footer className="footer">
            All right reserved. 
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

