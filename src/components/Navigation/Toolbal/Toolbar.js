import "./Toolbar.scss"

import PropTypes from 'prop-types'
import React from 'react'

const Toolbar = props => {
	return (
		<header className="toolbar">
			<div>MENU</div>
			<div>LOGO</div>
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
