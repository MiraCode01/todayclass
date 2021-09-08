import React from 'react'
import styled from "styled-components"
import syn from "./desk.png"
import syn1 from "./pr-checks.png"

const Slider = () => {
    return (
        <Wrapper>
            <Imagecontainer src={syn}/>
            
        </Wrapper>
    )
}

export default Slider

const Wrapper = styled.div `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
color: white;
`
const Imagecontainer = styled.img `
margin-top: 80px;
width: 80%;
height: 450px;
background-color: white;
border-radius: 10px;
object-fit: fill;
`
