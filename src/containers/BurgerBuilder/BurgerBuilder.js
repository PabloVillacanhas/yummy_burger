import "./BurgerBuilder.scss"
import "components/UI/Modals/Modal.scss"

import React, { useEffect, useRef, useState } from 'react';

import Burger from 'components/Burger/Burger'
import BurgerAPI from 'http/api/'
import BurguerCockpit from 'components/BurgerCockpit/BurgerCockpit';
import Error from 'components/UI/Error/Error'
import Load from 'components/UI/Load/Load'
import Logo from "components/Logo/Logo";
import Modal from 'components/UI/Modals/Modal'
import OrderSummary from "components/OrderSummary/OrderSummary";
import Success from 'components/UI/Success/Success'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const BurguerBuilder = (props) => {

  const modal = useRef(null)
  const [msg, setMsg] = useState("")
  const [total, setTotal] = useState(0.00);
  const [ingredients, setIngredients] = useState({});
  const [requestStatus, setRequestStatus] = useState("none") //none, pending, success

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

  const onPurchase = async () => {
    setRequestStatus("pending")
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
    await BurgerAPI.post(order).then(res => {
      setRequestStatus("success");
      setTimeout(
        () => {
          toggleShowModal();
          BurgerAPI.getIngredients().then(
            data => setIngredients(data)
          )
          setTimeout(
            () => {
              setRequestStatus("none")
              setTotal(0.00)
            },
            1000
          )
        }, 2000)
    }
    ).catch(res => {
      setMsg(res.message)
      setRequestStatus("error")
    }
    );
  }

  const changeState = (requestStatus) => {
    switch (requestStatus) {
      case 'none':
        console.log("none");
        return <OrderSummary totalPrice={total} ingredients={ingredients}></OrderSummary>
      case 'pending':
        console.log("pending");
        return <Load />;
      case 'success':
        console.log("success");
        return <Success />;
      case 'error':
        return <Error error={msg}></Error>
      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      <Modal purchase={onPurchase} toggle={toggleShowModal} ref={modal} className="modal">
        {
          changeState(requestStatus)
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