import PropTypes from 'prop-types'
import React from 'react'

const Modal = props => {
	return (
		<div className="modal">
			{props.children}
		</div>
	)
}

Modal.propTypes = {

}

export default Modal
