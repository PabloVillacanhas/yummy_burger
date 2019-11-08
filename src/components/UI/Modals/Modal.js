import Button from 'components/UI/Buttons/Button'
import React from 'react'

const Modal = React.forwardRef((props, ref) => {

	const hideElement = () => {
		let modalWidth = document.getElementById("modal").offsetWidth;
		document.getElementById("modal").style.left = -modalWidth - 2 + "px";
	}

	return (
		<div id="modal" ref={ref} className="modal">
			<div className="modalBody">
				{props.children}
			</div>
			<div>
				<Button purchase={e => { props.purchase(); hideElement() }} classes={["btn-continue"]} ></Button>
			</div>
			<div onClick={hideElement} className="closeButton">[X]</div>
		</div>
	)
});

export default Modal
