import Button from 'components/UI/Buttons/Button'
import React from 'react'

const Modal = React.forwardRef((props, ref) => {

	const hideElement = () => {
		document.getElementById("modal").style.left = "-45%";
	}

	return (
		<div id="modal" ref={ref} className="modal">
			<div className="modalBody">
				{props.children}
			</div>
			<div>
				<Button classes={["btn-continue"]} ></Button>
			</div>
			<div onClick={hideElement} className="closeButton">[X]</div>
		</div>
	)
});

export default Modal
