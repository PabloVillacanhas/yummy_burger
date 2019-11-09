import './Error.scss'

import React from 'react'

export const Error = (props) => {
	return (
		<div className="f-modal-alert">
			<div className="f-modal-icon f-modal-error animate">
				<span className="f-modal-x-mark">
					<span className="f-modal-line f-modal-left animateXLeft"></span>
					<span className="f-modal-line f-modal-right animateXRight"></span>
				</span>
				<div className="f-modal-placeholder"></div>
				<div className="f-modal-fix"></div>
			</div>
			<div className="errorMsg">
				{props.error}
			</div>
		</div>
	)
}

export default Error;
