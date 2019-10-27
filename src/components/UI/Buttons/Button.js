import 'components/UI/Buttons/Button.scss'

import React from 'react'

const Button = (props) => {
	return (
		<button className={"button " + [...props.classes].join(' ')}>
			Continue to checkout
		</button>
	)
}

export default Button;
