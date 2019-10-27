import React from 'react'

const Modal = React.forwardRef((props, ref) => {

	const hideElement = () => {
		document.getElementById("modal").style.top = "-30%";
	}

	return (
		<div id="modal" ref={ref} className="modal">
			<div className="modalBody"></div>
			{props.children}
			<div onClick={hideElement} className="closeButton">[X]</div>
		</div>
	)
});

export default Modal
