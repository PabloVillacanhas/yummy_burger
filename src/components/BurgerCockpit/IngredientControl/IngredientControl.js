import React from 'react'

import "./IngredientControl.scss"

const IngredientControl = (props) => {
	return (
		<div className="ingredientControl">
			<label className="label">{props.label}</label>
			<button className="more" onClick={props.onAdd}>More</button>
			<button className="less" onClick={props.onRemove}>Less</button>
		</div>
	)
}

export default IngredientControl
