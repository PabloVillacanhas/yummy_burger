import "./BurgerBuilder.scss"
import "components/UI/Modals/Modal.scss"

import React, { useRef, useState } from 'react';

import Burger from 'components/Burger/Burger'
import BurguerCockpit from 'components/BurgerCockpit/BurgerCockpit';
import Modal from 'components/UI/Modals/Modal'
import OrderSummary from "components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const BurguerBuilder = (props) => {

  const modal = useRef(null)

  const [total, setTotal] = useState(0);

  const [ingredients, setIngredients] = useState(
    {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    }
  );

  const onCheckoutHandler = () => {
    console.log("aldjnasld");
    console.log(modal.current);
    modal.current.style.top = "30%"
    modal.current.style.left = "30%"
  }

  const addIngredientHandler = (type) => {
    if (ingredients.hasOwnProperty(type)) {
      ingredients[type] += 1;
      setIngredients(ingredients);
      setTotal((Number(total) + Number(INGREDIENT_PRICES[type])).toFixed(2));
    }
  }

  const removeIngredientHandler = (type) => {
    if (ingredients.hasOwnProperty(type)) {
      ingredients[type] -= 1;
      setIngredients(ingredients)
      setTotal((Number(total) - Number(INGREDIENT_PRICES[type])).toFixed(2));
    }
  }

  return (
    <React.Fragment>
      <Modal ref={modal} className="modal">
        <OrderSummary totalPrice={total} ingredients={ingredients}></OrderSummary>
      </Modal>
      <Burger ingredients={ingredients}></Burger>
      <BurguerCockpit
        ingredients={ingredients}
        onAddIngredient={addIngredientHandler}
        onRemoveIngredient={removeIngredientHandler}
        totalPrice={total}
        onCheckout={() => onCheckoutHandler()}>
      </BurguerCockpit>
    </React.Fragment>
  );
}

export default BurguerBuilder;