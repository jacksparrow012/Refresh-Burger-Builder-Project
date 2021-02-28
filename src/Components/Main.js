import React from 'react';
import Header from "./Header/Header"
import BurgerBuilder from "./BurgerBuilder/BugerBuilder"
const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <BurgerBuilder />
            </div>
        </div>
    );
};

export default Main;