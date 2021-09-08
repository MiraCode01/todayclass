import React from 'react'
import styled from 'styled-components'
import logo from "./github.jpg"
import {Link} from "react-router-dom"

const Headernav = () => {
    return (
        <Container>
            <Logo src={logo}/>
            <Wrapper>
                <Wrap to="/">
                    <span>Home</span>
                </Wrap>
                <Wrap to="/about">
                    <span>About</span>
                </Wrap>
                <Wrap to="/contact">
                    <span>Contact</span>
                </Wrap>
                <Wrap  to="/help">
                    <span>Help</span>
                </Wrap>
            </Wrapper>
           <Avatarlink>
               <Avatar>M</Avatar>
               <a
               onClick={()=>{
                   console.log("You are now logged out.....")
               }}
               >Logout</a>
           </Avatarlink>
        </Container>
    );
};

export default Headernav

const Container = styled.div `
width: 100%;
height: 80px;
background-color: black;
display: flex;
align-items: center;
color: white;
`;
const Wrap = styled(Link) `
text-decoration: none;
color: white;
span{
    font-size: 15px;
    font-weight: bold;
    margin: 20px;
    text-transform: uppercase;
    position: relative;

    :after {
        content: "" ;
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: -4px;
        left: 0;
        background-color: white;
        opacity: 0;
        transition: all 400ms;
        transition: scaleX(0);
        transform-origin: left;
    }
};
:hover{
    span{
        cursor:pointer;
        :after{
            opacity: 1;
            transition: scaleX(1);
        }
    }
}
`;
const Wrapper = styled.div`
display: flex;
justify-content: flex-start;
flex: 1;
`
const Logo = styled.img `
width: 50px;
height: 50px;
border-radius: 100%;
object-fit: contain;
padding-left: 25px;
margin-right: 30px;
`
const Avatar = styled.span `
margin-right: 25px;
width: 50px;
height: 50px;
border-radius: 100%;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
font-size: larger;
font-weight: bold;
`
const Avatarlink = styled.div `
a{
    display: none;
}

:hover {
    cursor:pointer;
    a{
        display:block;
        font-size:large;
    }
}
`

