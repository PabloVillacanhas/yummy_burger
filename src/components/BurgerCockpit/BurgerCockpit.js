import React from 'react'

import "./IngredientControl/IngredientControl"
import "./BurgerCockpit.scss"
import IngredientControl from './IngredientControl/IngredientControl'

const controls = [
	{ label: 'Salad', type: "salad" },
	{ label: 'Bacon', type: "bacon" },
	{ label: 'Cheese', type: "cheese" },
	{ label: 'Meat', type: "meat" }
]

const BurgerCockpit = (props) => {
	return (
		<div className="burgerCockpit">
			<div className="ingredients">
				{
					controls.map(ctrl => (
						<IngredientControl
							ingredients={props.ingredients}
							onAdd={() => props.onAddIngredient(ctrl.type)}
							onRemove={() => props.onRemoveIngredient(ctrl.type)}
							key={ctrl.type} label={ctrl.label} type={ctrl.type} />
					))
				}
			</div>
			<div className="totalPrice">
				Total : {props.totalPrice} €
			</div>
		</div>
	)
}

export default BurgerCockpit
