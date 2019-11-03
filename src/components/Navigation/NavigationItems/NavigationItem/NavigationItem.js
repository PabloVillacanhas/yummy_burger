import './NavigationItem.scss'

import PropTypes from 'prop-types'
import React from 'react'

const NavigationItem = props => (
	<li className="navigationItem" >
		<a href={props.link} className={props.active ? "active" : null}>
			{props.children}
		</a>
	</li>
);

NavigationItem.propTypes = {
	link: PropTypes.string.isRequired
}

export default NavigationItem
