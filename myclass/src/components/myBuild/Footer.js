import React from 'react'
import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper>
            <Button>See what's been built</Button>
            <All>
                <One>Terms</One>
                <One>Privacy Policy</One>
                <One>EULA</One>
                <One>Release Notes</One>
            </All>
            <Reserve>@ 2021 GitHub, Inc. All rights reserved.</Reserve>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div `
margin-top: 30px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Button = styled.button `
height: 55px;
width: 190px;
background-color: transparent;
color: white;
font-size: large;
// border: 0.5px solid white;
border-radius: 5px;
:hover{
    background-color: white;
    cursor: pointer;
    color: black;
    height: 65px;
    width: 200px;
    font-weight: bold;
}
`
const All = styled.div `
width: 90%;
display: flex;
justify-content: space-around;
margin-top: 150px;
`
const One = styled.div `
color: purple;
`
const Reserve = styled.div `
margin-top: 30px;
`
// const Wrapper = styled.div `
// `