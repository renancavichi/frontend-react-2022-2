import styled, {keyframes} from 'styled-components'
import {BiLoaderAlt} from 'react-icons/bi'
import React from 'react'

const ButtonLoading = ({type = 'button', isLoading, children}) => {
  return (
    <LoadingButton type={type} disabled={isLoading}>{
        isLoading ? <Loader /> : children
    }</LoadingButton>
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
    animation: ${rotate} 1s linear infinite;
    width: 24px;
    height: 24px;
`

const LoadingButton = styled.button`
    background: #fd8d5c;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    padding: 5px 20px;
    width: 190px;
    height: 35px;
    border: none;
    cursor: pointer;
    &:hover {
        background: #c13a00;
    }
    &:disabled{
        cursor: default;
        background: #fd8d5c;
    }
`

export default ButtonLoading