import Burger from 'components/Burger/Burger'
import Button from 'components/UI/Buttons/Button'
import React from 'react'

const Checkout = props => {
	return (
		<div>
			<h1>Hope it tastes well!</h1>
			<div style={{ width: '300', height: '300', margin: 'auto' }}>
				<Burger ingredients={props.ingredients}></Burger>
			</div>
			<Button classes={["btn-continue"]}>Continue</Button>
			<Button classes={["btn-cancel"]}>Cancel</Button>
		</div>
	)
}

export default Checkout
