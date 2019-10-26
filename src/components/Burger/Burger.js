import React from 'react'

import './Burger.scss'
import Ingredient from './Ingredient/Ingredient'

const Burger = props => {

    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => <Ingredient key={igKey + i} type={igKey} />
                );
        })
        .reduce((prev, curr) => {
            return prev.concat(curr)
        }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Start putting into ingredients!</p>
    }

    return (
        <div className="burger">
            <Ingredient type="bread-top"></Ingredient>
            {ingredients}
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
    )
};

Burger.propTypes = {

}

export default Burger
