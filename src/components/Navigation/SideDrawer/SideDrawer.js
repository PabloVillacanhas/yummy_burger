import './SideDrawer.scss'

import Logo from 'components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import PropTypes from 'prop-types'
import React from 'react'

function SideDrawer(props) {
	return (
		<div className="sideDrawer">
			<Logo></Logo>
			<nav>
				<NavigationItems></NavigationItems>
			</nav>
		</div>
	)
}

SideDrawer.propTypes = {

}

export default SideDrawer

