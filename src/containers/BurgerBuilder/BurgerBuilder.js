import "./BurgerBuilder.scss"
import "components/UI/Modals/Modal.scss"

import React, { useEffect, useRef, useState } from 'react';

import Burger from 'components/Burger/Burger'
import BurgerAPI from 'http/api/'
import BurguerCockpit from 'components/BurgerCockpit/BurgerCockpit';
import Load from 'components/UI/Load/Load'
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

  const [ingredients, setIngredients] = useState({});

  const [loading, setloading] = useState(false)

  //After each render fetch ingredients
  useEffect(() => {
    BurgerAPI.getIngredients().then(
      data => setIngredients(data)
    )
  }, [])

  const toggleShowModal = () => {
    if (document.getElementById("modal").classList.contains("hide")) {
      document.getElementById("modal").classList.remove("hide")
      document.getElementById("modal").classList.add("show")
    }
    else {
      document.getElementById("modal").classList.remove("show")
      document.getElementById("modal").classList.add("hide")
    }
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

  const onPurchase = () => {
    setloading(true)
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
    BurgerAPI.post(order).then(res => {
      setloading(false);
      toggleShowModal();
    }
    );
  }

  return (
    <React.Fragment>
      <Modal purchase={onPurchase} ref={modal} className="modal">
        {loading ?
          <Load></Load> :
          <OrderSummary totalPrice={total} ingredients={ingredients}></OrderSummary>
        }
      </Modal>
      <Burger ingredients={ingredients}></Burger>
      <BurguerCockpit
        ingredients={ingredients}
        onAddIngredient={addIngredientHandler}
        onRemoveIngredient={removeIngredientHandler}
        totalPrice={total}
        onCheckout={toggleShowModal}>
      </BurguerCockpit>
    </React.Fragment>
  );
}

export default BurguerBuilder;