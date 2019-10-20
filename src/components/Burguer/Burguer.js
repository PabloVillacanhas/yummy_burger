import React from 'react'

import './Burguer.scss'
import Ingredient from './Ingredient/Ingredient'

const Burguer = props => (
    <div className="Burguer">
        <Ingredient type="bread-top"></Ingredient>
        <Ingredient type="cheese"></Ingredient>
        <Ingredient type="bacon"></Ingredient>
        <Ingredient type="bread-bottom"></Ingredient>
    </div>
);

Burguer.propTypes = {

}

export default Burguer
