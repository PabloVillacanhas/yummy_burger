import "./BurgerCockpit.scss"

import React, { ReactDOM, useEffect, useRef } from 'react'

import IngredientControl from './IngredientControl/IngredientControl'

const controls = [
	{ label: 'Salad', type: "salad" },
	{ label: 'Bacon', type: "bacon" },
	{ label: 'Cheese', type: "cheese" },
	{ label: 'Meat', type: "meat" }
]

const BurgerCockpit = (props) => {

	const orderButton = useRef(null)

	useEffect(() => {
		let disabled = props.totalPrice <= 0.00
		disabled ? orderButton.current.setAttribute("disabled", true) : orderButton.current.removeAttribute("disabled");
	}, [props.totalPrice])

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
			<div className="orderPanel">
				<button ref={orderButton} className="orderButton">Order now!</button>
			</div>
		</div>
	)
}

export default BurgerCockpit
