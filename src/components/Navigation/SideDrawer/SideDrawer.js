import './SideDrawer.scss'

import Backdrop from 'components/UI/Backdrop/Backdrop'
import Logo from 'components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import PropTypes from 'prop-types'
import React from 'react'

function SideDrawer(props) {

	return (
		<React.Fragment>
			<Backdrop show={props.show} clicked={props.click}></Backdrop>
			<div className={props.show ? " sideDrawer open" : "sideDrawer close"} >
				<Logo></Logo>
				<nav>
					<NavigationItems></NavigationItems>
				</nav>
			</div>
		</React.Fragment >
	)
}

SideDrawer.propTypes = {
	show: PropTypes.bool.isRequired,
	click: PropTypes.func.isRequired
}

export default SideDrawer

