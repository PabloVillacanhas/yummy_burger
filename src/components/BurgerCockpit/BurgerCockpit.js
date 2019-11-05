import "./BurgerCockpit.scss"

import React, { useEffect, useRef } from 'react'

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
			<div className="orderPanel">
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
				<button ref={orderButton} onClick={props.onCheckout} className="orderButton">Order now!</button>
			</div>
			<div className="totalPrice">
				Total : {props.totalPrice} €
			</div>
		</div>
	)
}

export default BurgerCockpit
