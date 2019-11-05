import './Logo.scss'

import React from 'react'
import burgerLogo from 'components/../../assets/images/burger-logo.png';

const Logo = () => (
	<div className="logo">
		<img src={burgerLogo} alt="My Burger" />
	</div>
);

export default Logo
