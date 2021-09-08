import React from 'react'
import styled from "styled-components"
import logo from "./github.jpg"


const Header = () => {
    return (
        <Wrapper>
            <Image src={logo}/>
            <Content>
                <Word>Overview</Word>
                <Word>Release New</Word>
                <Word>Help</Word>
            </Content>
            <Holder>
                <Head>Github Desktop</Head>
                <Cap>Focus on what matters instead of fighting
                     with Git. Whether you're new to Git or a 
                     seasoned user, GitHub Desktop simplifies 
                     your development workflow.</Cap>
            </Holder>
            <Button>Download for Windows (64bit)</Button>
            <Download>
                <Downl>
                    <Letter1>Download for<Letter> macOS </Letter>or<Letter> (msi)</Letter></Letter1>
                </Downl>
                <Downl2>
                    <Letter1>By downloading, you agree to<Letter> the open source application terms</Letter></Letter1>
                </Downl2>
            </Download>
            
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
color: white;
`
const Image = styled.img `
width: 70px;
height: 70px;
border-radius: 100%;
object-fit: fill; 
`
const Content = styled.div `
margin-top: 20px;
display: flex;
`
const Word = styled.div `
margin: 10px;
transition: all 350ms;
// text-transform: uppercase;
font-size: 12px;
font-weight: bold;
letter-spacing: 1.2px;
transform: scale(1);
position: relative;

:after{
    content: " ";
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: white;
    bottom: -4px;
    left: 0;
    opacity: 0;
    transform : scale(0);
    transform-origin: center;
    transition: all 350ms;

}
:hover{
    cursor: pointer;
    color: #812790;
    transform: scale(1.03);

    :after{
        opacity: 1;
        transform : scale(1.05)
    }
}
// text-transform: uppercase;
`
const Holder = styled.div `
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
margin-top: 70px;


`
const Head = styled.div `
font-size: 50px;

`

const Cap = styled.p `
width: 90%;
text-align: center;
letter-spacing: 1px;
`
const Button = styled.button `
background-color: purple;
width: 320px;
height: 60px;
color: white;
border: black;
border-radius: 5px;
font-size: 20px;
`
const Download = styled.div `
margin-top: 30px;
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
`
const Downl = styled.div `
// background-color: white;
// display: flex;
// justify-content: space-between;
// width: 25%;
`
const Letter1 = styled.span `
color: white;
`
const Letter = styled.span `
color: purple;
`
const Downl2 = styled.div `
width: 41%;
display: flex;
justify-content: space-between;
`
