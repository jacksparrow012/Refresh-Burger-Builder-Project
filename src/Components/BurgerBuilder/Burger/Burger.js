import React from 'react';
import Ingredient from "../Ingredient/Ingredient"
import "./Burger.css";
const Burger = (props) => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()]

        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })
    }).reduce((accu, curr) => {
        return accu.concat(curr)
    }, [])
    if (ingredientArr.length === 0) {
        ingredientArr = <p>Plz Add Some Ingredient</p>
    }
    return (
        <div className="Burger">
            <Ingredient type="bread-top" />
            {ingredientArr}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default Burger;