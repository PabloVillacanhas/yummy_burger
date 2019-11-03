import "./Toolbar.scss"

import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import React from 'react'

const Toolbar = props => (
	<header className="toolbar">
		<div onClick={props.toggle} className={"toggle"}>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
		<Logo></Logo>
		<nav>
			<NavigationItems></NavigationItems>
		</nav>
	</header>
)

export default Toolbar
