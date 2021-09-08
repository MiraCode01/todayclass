import React from 'react'
import styled from 'styled-components'
import img from '../Routerstudy/github.jpg'
import img1 from '../Routerstudy/github.jpg'
// import img2 from '../image/5.jpg'

const Mybuild = () => {
    return (
        <Container>
            <Top>
                <Avatar placeholder="Your Avatar"></Avatar>
                <Name placeholder="Your Name"></Name>
                <Quote placeholder="Your Quote"></Quote>
            </Top>

            <Boxes>
                <Box1>
                    <Head>
                        <Empty></Empty>
                        <Logo src ={img1}/>
                    </Head>
                   <Dp>
                       <Cont>
                            <Line></Line>
                            <Pic src={img1}/>
                            <Line></Line>
                        </Cont>
              
                        <Names>Miracle</Names>
                   </Dp>
                    <Quotes>
                        quote
                    </Quotes>
                    <Time>Time</Time>
                </Box1>

                <Box1>
                    <Head>
                        <Empty></Empty>
                        <Logo src ={img}/>
                    </Head>
                   <Dp>
                       <Cont>
                            <Line></Line>
                            <Pic src={img1}/>
                            <Line></Line>
                        </Cont>
              
                        <Names>Miracle</Names>
                   </Dp>
                    <Quotes>
                        quote
                    </Quotes>
                    <Time>Time</Time>
                </Box1>

                <Box1>
                    <Head>
                        <Empty></Empty>
                        <Logo src ={img}/>
                    </Head>
                   <Dp>
                       <Cont>
                            <Line></Line>
                            <Pic src={img1}/>
                            <Line></Line>
                        </Cont>
              
                        <Names>Miracle</Names>
                   </Dp>
                    <Quotes>
                        quote
                    </Quotes>
                    <Time>Time</Time>
                </Box1>
            </Boxes>
           
        </Container>
    )
}

export default Mybuild

const Container = styled.div `
width: 100%;
align-items: center;
display: flex;
flex-direction: column;
`
const Avatar = styled.input ``
const Name = styled.input ``
const Quote = styled.input ``
const Top = styled.div `
width: 50%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-between;
// background-color: green;
height: 90px;

`
const Boxes = styled.div `
width: 100%;
margin-top: 70px;
display: flex;
justify-content: space-around;
`
const Box1 = styled.div `
margin: 20px;
width: 32%;
height: 400px;
border-radius: 10px;
background-color: black;
color: white;
border: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

`
const Empty = styled.div `
flex: 1;
width: 70%;

`
const Head = styled.div `
width: 100%;
display: flex;
// justify-content: -end;
padding-right: 5px;
// padding-left: 270px;
padding-top: 5px;
`

const Logo = styled.img `
border-radius: 100%;
width: 20px;
height: 20px;
`
const Pic = styled.img `
width: 100px;
height: 100px;
border-radius: 100%;
`

const Names = styled.div `
// margin-top: 20px;
`

const Quotes = styled.div `
text-align: center;
padding-left: 12px;
padding-right: 12px;
// margin-top: 50px;
`
const Line = styled.div `
width: 40%;
height: 1px;
background-color: grey;
`
const Dp = styled.div `
// background-color: blue;
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;
`
const Cont = styled.div `
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`
const Time = styled.div ``
// const Head = styled.div ``