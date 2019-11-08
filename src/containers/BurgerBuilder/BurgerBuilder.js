import "./BurgerBuilder.scss"
import "components/UI/Modals/Modal.scss"

import React, { useRef, useState } from 'react';

import Burger from 'components/Burger/Burger'
import BurgerAPI from 'http/api/'
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

  const [total, setTotal] = useState(0.00);

  const [ingredients, setIngredients] = useState(
    {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    }
  );

  const onCheckoutHandler = () => {
    let modalWidth = modal.current.offsetWidth;
    let windowWidth = window.screen.availWidth;
    modal.current.style.left = windowWidth / 2 - modalWidth / 2 + "px"
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

  const resetOrder = () => {
    setIngredients({
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0
    })
    setTotal(0.00)
  }

  const onContinuePurchase = async () => {
    const order = {
      ingredients: ingredients,
      price: total,
      customer: {
        name: 'Pablo',
        address: {
          street: 'Teststreet 1',
          zipCode: '12312',
          country: 'Germany'
        },
        email: 'test@test.com'
      }
    }
    await BurgerAPI.post(order);
    resetOrder();
  }

  return (
    <React.Fragment>
      <Modal purchase={onContinuePurchase} ref={modal} className="modal">
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