import "./Toolbar.scss"

import Logo from 'components/Logo/Logo'
import PropTypes from 'prop-types'
import React from 'react'

const Toolbar = props => {
	return (
		<header className="toolbar">
			<div>MENU</div>
			<Logo></Logo>
			<nav>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</nav>
		</header>
	)
}

Toolbar.propTypes = {

}

export default Toolbar
