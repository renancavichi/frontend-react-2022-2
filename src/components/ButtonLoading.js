import styled, { keyframes } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'
import React from 'react'

const ButtonLoading = ({ type = 'button', onClick, isLoading, children }) => {
	return (
		<LoadingButton onClick={onClick} type={type} disabled={isLoading}>
			{children}
			{isLoading && <Loader />}
		</LoadingButton>
	)
}

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

const LoadingButton = styled.button`
	background: #fd8d5c;
	position: relative;
	color: #fff;
	border-radius: 10px;
	font-weight: bold;
	padding: 5px 20px;
	height: 35px;
	border: none;
	cursor: pointer;
	&:hover {
		background: #c13a00;
	}
	&:disabled{
		cursor: default;
		color: #fd8d5c;
		background: #fd8d5c;
	}
`

export default ButtonLoading