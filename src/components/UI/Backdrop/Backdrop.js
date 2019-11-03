import './Backdrop.scss'

import PropTypes from 'prop-types'
import React from 'react'

const Backdrop = props => (
	props.show ? <div className="backdrop" onClick={props.clicked}></div> : null
);

Backdrop.propTypes = {
	show: PropTypes.bool.isRequired,
	clicked: PropTypes.func.isRequired
}
export default Backdrop
