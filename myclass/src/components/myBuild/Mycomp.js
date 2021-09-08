import React from 'react'
import styled from "styled-components"
// import img from "./user.png"

const Mycomp = ({img, headmy, paragraphmy }) => {
    return (
               <Wrapper>
                <Img img src={img}/>
                <Both>
                    <Head>{headmy}</Head>
                    <Paragraph>{paragraphmy}</Paragraph>
                </Both>
            </Wrapper>
    )
}

export default Mycomp

const Wrapper = styled.div `
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: space-around;

`
const Img = styled.img `
width: 40px;
height: 50px;
background-color: white;
border-radius: 5px;
object-fit: fill;

`
const Both = styled.div `
text-align: center;

`
const Head = styled.h3 `

`
const Paragraph = styled.p `

`