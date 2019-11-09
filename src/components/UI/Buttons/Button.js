import 'components/UI/Buttons/Button.scss'

import React from 'react'

const Button = (props) => {
	return (
		<button onClick={props.purchase} className={"button " + [...props.classes].join(' ')}>
			{props.children}
		</button>
	)
}

export default Button;
