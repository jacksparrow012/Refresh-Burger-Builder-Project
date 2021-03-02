import React from 'react';
import Header from "./Header/Header"
import BurgerBuilder from "./BurgerBuilder/BugerBuilder"
import Checkout from "../Components/BurgerBuilder/Orders/Checkout.js/Checkout"
import Orders from "../Components/BurgerBuilder/Orders/Orders"
import { Route } from "react-router-dom"
import Auth from "./Auth/Auth"
const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">

                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/login" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>
        </div>
    );
};

export default Main;