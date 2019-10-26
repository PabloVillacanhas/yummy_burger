import React, { useState } from 'react';

import Burguer from '../../components/Burguer/Burguer'

import "./BurguerBuilder.scss"
import "../../components/BurgerCockpit/BurguerCockpit"
import BurguerCockpit from '../../components/BurgerCockpit/BurguerCockpit';

const BurguerBuilder = (props) => {
  const [ingredients, setIngredients] = useState(
    {
    }
  );

  function addIngredient(type) {

  }

  function removeIngredient(type) {

  }

  return (
    <React.Fragment>
      <Burguer ingredients={ingredients}></Burguer>
      <BurguerCockpit add={addIngredient()} remove={removeIngredient()}></BurguerCockpit>
    </React.Fragment>
  );
}

export default BurguerBuilder;