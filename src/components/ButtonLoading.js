import styled from 'styled-components'
import React from 'react'
import Loader from './Loader'

const ButtonLoading = ({ type = 'button', onClick, isLoading, children }) => {
	return (
		<LoadingButton onClick={onClick} type={type} disabled={isLoading}>
			{children}
			{isLoading && <Loader />}
		</LoadingButton>
	)
}

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