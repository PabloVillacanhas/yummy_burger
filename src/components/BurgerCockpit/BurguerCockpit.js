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

const BurguerCockpit = () => {
	return (
		<div className="burguerCockpit">
			{
				controls.map(ctrl => (
					<IngredientControl key={ctrl.key} label={ctrl.label} />
				))
			}
		</div>
	)
}

export default BurguerCockpit
