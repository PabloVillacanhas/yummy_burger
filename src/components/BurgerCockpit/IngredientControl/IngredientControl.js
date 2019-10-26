import React from 'react'

import "./IngredientControl.scss"

const IngredientControl = (props) => {
	return (
		<div className="ingredientControl">
			<label className="label">{props.label}</label>
			<button className="more">More</button>
			<button className="less">Less</button>
		</div>
	)
}

export default IngredientControl
