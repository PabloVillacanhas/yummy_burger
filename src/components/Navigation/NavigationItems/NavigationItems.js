import './NavigationItems.scss'

import NavigationItem from './NavigationItem/NavigationItem'
import React from 'react'

const NavigationItems = props => (
	<ul className="navigationItems">
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
)

export default NavigationItems
