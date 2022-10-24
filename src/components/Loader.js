import styled, { keyframes } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const Loader = styled(BiLoaderAlt)`
	color: #fff;
	animation: ${rotate} 0.5s linear infinite;
	width: 24px;
	height: 24px;
	position: absolute;
	left: calc(50% - 12px);
	top: calc(50% - 12px);
`

export default Loader