import styled from "styled-components"

const Alert = ({children, type, opened}) => {
  return (
    <AlertBox type={type} opened={opened}>{children}</AlertBox>
  )
}

const types = {
	success: "#c2ffb6",
	error: "#ffbfbf",
	warning: "#fff7bf",
	info: "#bff3ff"
}

const AlertBox = styled.div`
	display: ${props => props.opened ? 'block' : 'none'};
	width: 100%;
	padding: 17px;
	border-radius: 8px;
	background-color: ${props => types[props.type]};
	margin: 15px 0;
`

export default Alert