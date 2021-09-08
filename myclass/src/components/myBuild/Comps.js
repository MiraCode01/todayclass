import React from 'react'
import styled from "styled-components"


const Comps = ({inparagraph, img, head, paragraph, change, clr}) => {
    return (
        <Wrapper change={change}>
            <Image src={img}/>
            <Paragraph>
                <Head clr={clr}>{head} </Head>
                <Paragrap>{paragraph}  
                    <Diff> {inparagraph}</Diff>
                </Paragrap>
            </Paragraph>
        </Wrapper>
    )
}

export default Comps

const Wrapper = styled.div `
margin-top: 30px;
width: 100%;
display: flex;
flex-direction: ${({change})=> change ? "row-reverse" : "row"};
align-items: center;
justify-content: space-around;
`

const Image = styled.img `
width: 35%;
height: 250px;
background-color: white;
border-radius: 5px;
object-fit: fill;
`

const Paragraph = styled.div `
width: 35%;
text-align: center;
`

const Paragrap = styled.p `
`
const Head = styled.p `
font-size: x-large;
color: ${({clr})=> clr ? "purple" : "white"};
`
const Diff = styled.span `
color: purple
`