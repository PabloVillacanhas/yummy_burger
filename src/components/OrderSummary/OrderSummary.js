import PropTypes from 'prop-types'
import React from 'react'

const OrderSummary = props => {

	const ingredientsSummary = Object.keys(props.ingredients);

	const getItems = (ingredients) => {
		return ingredients.map((value, idx) => {
			return (<li key={value + idx}>{value + props.ingredients[value]}</li>);
		});
	}

	return (
		<div>
			<h3>Your Order</h3>
			<p>Delicious burger</p>
			<ul>
				{
					getItems(ingredientsSummary)
				}
			</ul>
			<p>Continue to checkout</p>
		</div>
	)
}

OrderSummary.propTypes = {
	ingredients: PropTypes.object.isRequired
}

export default OrderSummary
