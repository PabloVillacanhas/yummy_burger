import React, { useState } from 'react';

import Burguer from '../../components/Burguer/Burguer'

import "./BurguerBuilder.scss"
import "../../components/BurgerCockpit/BurguerCockpit"
import BurguerCockpit from '../../components/BurgerCockpit/BurguerCockpit';

const BurguerBuilder = (props) => {

  const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
  }

  const [total, setTotal] = useState(0);

  const [ingredients, setIngredients] = useState(
    {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    }
  );

  const addIngredientHandler = (type) => {
    console.log("more");
    if (ingredients.hasOwnProperty(type)) {
      ingredients[type] += 1;
      setIngredients(ingredients);
      setTotal((Number(total) + Number(INGREDIENT_PRICES[type])).toFixed(2));
    }
  }

  const removeIngredientHandler = (type) => {
    if (ingredients.hasOwnProperty(type) && ingredients[type] > 0) {
      ingredients[type] -= 1;
      setIngredients(ingredients)
      setTotal((Number(total) - Number(INGREDIENT_PRICES[type])).toFixed(2));
    }
  }

  return (
    <React.Fragment>
      <Burguer ingredients={ingredients}></Burguer>
      <BurguerCockpit
        onAddIngredient={addIngredientHandler}
        onRemoveIngredient={removeIngredientHandler}
        totalPrice={total}>
      </BurguerCockpit>
    </React.Fragment>
  );
}

export default BurguerBuilder;