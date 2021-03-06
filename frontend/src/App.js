import React from 'react';
// import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen'; 
import LoginScreen from './screens/LoginScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

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
                <Link to="/">LOCAL TRADING</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                    <Link to="/signin">Sign In</Link>
                }
               
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
                <Route path="/signin" component={SigninScreen} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
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

