import './Logo.scss'

import PropTypes from 'prop-types'
import React from 'react'
import burgerLogo from 'components/../../assets/images/burger-logo.png';

const Logo = props => (
	<div className="logo">
		<img src={burgerLogo} alt="My Burger" />
	</div>
);

Logo.propTypes = {

}

export default Logo
