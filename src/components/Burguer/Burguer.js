import React from 'react'

import './Burguer.scss'
import Ingredient from './Ingredient/Ingredient'

const Burguer = props => {

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
        ingredients = <p>Start puttin into ingredients!</p>
    }

    return (
        <div className="burguer">
            <Ingredient type="bread-top"></Ingredient>
            {ingredients}
            <Ingredient type="bread-bottom"></Ingredient>
        </div>
    )
};

Burguer.propTypes = {

}

export default Burguer
