import React from 'react'

import "./IngredientControl/IngredientControl"
import "./BurguerCockpit.scss"
import IngredientControl from './IngredientControl/IngredientControl'

const controls = [
	{ label: 'Salad', type: "salad" },
	{ label: 'Bacon', type: "bacon" },
	{ label: 'Cheese', type: "cheese" },
	{ label: 'Meat', type: "meat" }
]

const BurguerCockpit = (props) => {
	return (
		<div className="burguerCockpit">
			<div className="ingredients">
				{
					controls.map(ctrl => (
						<IngredientControl
							onAdd={() => props.onAddIngredient(ctrl.type)}
							onRemove={() => props.onRemoveIngredient(ctrl.type)}
							key={ctrl.type} label={ctrl.label} />
					))
				}
			</div>
			<div className="totalPrice">
				Total : {props.totalPrice} €
			</div>
		</div>
	)
}

export default BurguerCockpit
