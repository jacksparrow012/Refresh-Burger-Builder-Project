import React from 'react';
import Header from "./Header/Header"
import BurgerBuilder from "./BurgerBuilder/BugerBuilder"
import Checkout from "../Components/BurgerBuilder/Orders/Checkout.js/Checkout"
import Orders from "../Components/BurgerBuilder/Orders/Orders"
import { Route } from "react-router-dom"
const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">

                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>
        </div>
    );
};

export default Main;