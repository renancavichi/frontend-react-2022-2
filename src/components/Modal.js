import styled from 'styled-components'
import { CgClose } from 'react-icons/cg'

const Modal = ({ showModal, children, setShowModal }) => {

	const handleClose = (event) => {
		if (event.target.classList.contains("my-modal")) {
			setShowModal(false)
		}
	}

	return (
		<OuterModal className={"my-modal"} open={showModal} onClick={(event) => handleClose(event)}>
			<InnerModal>
				<CloseIcon onClick={() => setShowModal(false)} />
				{children}
			</InnerModal>
		</OuterModal>
	)
}

const OuterModal = styled.div`
	position: fixed;
	display: ${props => props.open ? "flex" : "none"};
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #00000030;
	justify-content: center;
	align-items: center;
`

const InnerModal = styled.div`
	position: relative;
	width: 70%;
	max-width: 400px;
	height: auto;
	background: #FFF;
	border-radius: 15px;
	padding: 30px;
	& h1{
	margin: 0;
}
/* &:hover {
background: #435345;
}
@media(max-width: 700px) {
width: 95%;
} */
`

const CloseIcon = styled(CgClose)`
	position: absolute;
	top: 15px;
	right: 15px;
	padding: 5px;
	cursor: pointer;
`

export default Modal