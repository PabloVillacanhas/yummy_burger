import Button from 'components/UI/Buttons/Button'
import React from 'react'

const Modal = React.forwardRef((props, ref) => {

	return (
		<div id="modal" ref={ref} className="modal hide">
			<div className="modalBody">
				{props.children}
			</div>
			<div>
				<Button purchase={props.purchase} classes={["btn-continue"]} ></Button>
			</div>
			<div onClick={props.onCheckout} className="closeButton">[X]</div>
		</div>
	)
});

export default Modal
