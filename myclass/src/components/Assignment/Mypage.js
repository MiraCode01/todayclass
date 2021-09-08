import React from 'react'
import styled from 'styled-components'
import logo from './landing-logo.png'
import img1 from './mainshot.png'
import img2 from './design-section.png'
import img3 from './preview-section.png'
import img4 from './track-section.png'

const Mypage = () => {
    return (
        <Body>
            <Head>
                <Logo src={logo}/>
                <Subhead>
                  
                    <CompanyName>Dapi</CompanyName>
                    <Other>Changelog</Other>
                    <Other>Pricing</Other>
                    <Other>Contact</Other>
                </Subhead>
                <Subhead1>
                    <Log>Login</Log>
                    <Sign>Sign Up</Sign>
                </Subhead1>
            </Head>
            <Lword>
                <Part>
                    <Design>Design</Design>
                    , <Preview>Preview</Preview> and <Track>Track </Track>
                </Part>
              the API with the team</Lword>
            <Swords>Dapi  helps  streamline  API  integration  for  the 
                dev  team.  OpenAPI,  sequence  diagram,
                API  document  site  and  mock  server.
                It  aims  for  faster  integration  and 
                better  tracking.</Swords>
            <Trybutton>Try FREE Now</Trybutton>
            <FImage src={img1}/>
            <Line></Line>
            <CDesign>Design</CDesign>
            <Swords>
                More than just editing an openAPI doc,
                you can define the model relationship,
                draw sequence diagram to understand better
                the logic behind each API
            </Swords>
            <DImage src = {img2}/>
            <Line></Line>
            <CPreview>Preview</CPreview>
            <Swords>
                Deploy a password-protected API doc site
                and mock API server whenever you want.
                Let others in the team to do the integration
                and review before the API is ready.
            </Swords>
            <PImage src = {img3}/>
            <Line></Line>
            <CTrack>Track</CTrack>
            <Swords>
               Follow the updates and always keeping
               everybody aligned on the latest API.
               Review the API designing before the 
               performance issue happens.
            </Swords>
            <TImage src = {img4}/>
            <Lword>Ready to work on your API?</Lword>
            <Swords>
               Dapi keeps everyone in the dev team aligned.
               Backend, Frontend and PM, collaborative working
               in one platform.
            </Swords>
            <Button>Try FREE Now</Button>
            <Logo1 src={logo}/>
            <Footer>
              <White>Twitter</White>
              <Dots>.</Dots>
              <span>Changelog</span>
              <Dots>.</Dots>
              <span>Pricing</span>
              <Dots>.</Dots>
              <White>Contact</White>
            </Footer>
        </Body>
    )
}

export default Mypage

const Body = styled.div `
color: white;
display: flex;
flex-direction: column;
align-items: center;
// padding-top: 30px;
margin: 0;
`
const Head = styled.div `
padding-top: 30px;
padding-bottom: 30px;
width: 100%;
display: flex;
position: fixed;
backdrop-filter: blur(5px);
align-items: center;
`
const Subhead = styled.div `
width: 50%;
margin-left: 30px;
dipslay: flex;
justify-content: space-around;
align-items: center;
flex: 1;

`
const Logo = styled.img `
width: 35px;
height: 35px;
margin-left: 40px;
`
const CompanyName = styled.span `
font-weight: bold;
margin-left: 15px;
font-size: 20px;
`
const Other = styled.span `
font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
margin-left: 50px;

:hover{
    color: grey;
    transition: all 450ms;
    cursor: pointer;
}

`
const Subhead1 = styled.div `
display: flex;
align-items: center;
margin-right: 40px;
`
const Log = styled.div `
color: #568ef2;
font-weight: bold;
margin-right: 40px;
:hover{
    color: #568ef2;
    transition: all 450ms;
    cursor: pointer;
}
`
const Sign = styled.button `
background-color: #568ef2;
width: 100px;
height: 40px;
border-radius: 5px;
border: none;
color: white;
font-size: 15px;
font-weight: bold;
:hover{
    width: 101px;;
    height: 41px;
    transition: all 750ms;
    cursor: pointer;
}
`
const Lword = styled.div `
margin-top: 200px;
font-size: 70px;
font-weight: 600;
text-align: center;
font-family: sfrounded;
`
const Swords = styled.div `
margin-top: 50px;
font-family: 'Montserrat';
font-style: normal;
font-size: x-large;
letter-spacing: 1px;
text-align: center;
color: grey;
width: 90%;
`
const Design = styled.span `
// background-image: linear-gradient(
//     45deg,#5b76d4,#f774b9 50%,#fff 75%,#fff);
// animation: rainbow-text-animation 3.5s ease forwards;
`
const Preview = styled.span ``
const Track = styled.span ``
const Part = styled.div ``
const Trybutton = styled.button `
margin-top: 70px;
width: 340px;
height: 70px;
background-color: black;
color: white;
font-size: larger;
font-weight: 900;
border: 1px solid purple ;
border-radius: 10px;
box-shadow: 0 0 25px rgb(91 118 212 / 55%);
cursor: pointer;

:hover{
    transition: all 250ms;
    box-shadow: 0 0 45px rgb(91 118 212 / 60%);
}

`

const FImage = styled.img `
margin-top: 200px;
width: 97%;
height: 680px;
box-shadow: 0 0 40px rgb(86 142 242 / 90%);


`
const Line = styled.div `
margin-top: 200px;
margin-bottom: 100px;
height: 150px;
width: 1px;
background-color: grey;

`
const CDesign = styled.div `
background-clip: text;
 -webkit-background-clip: text;
 background-image: linear-gradient(45deg,#5b76d4,#f774b9);
-webkit-text-fill-color: transparent;
font-size: 80px;
font-weight: bold;
font-family: sfrounded;
`
const DImage = styled.img `
margin-top: 200px;
width: 90%;
height: 680px;
box-shadow: 0 0 40px rgb(86 142 242 / 20%);
`
const CPreview = styled.div `
background-clip: text;
-webkit-background-clip: text;
background-image: linear-gradient(45deg,#38d8f5,#0027d4);
-webkit-text-fill-color: transparent;
font-size: 80px;
font-weight: bold;
font-family: sfrounded;

`
const PImage = styled.img `
margin-top: 200px;
width: 85%;
height: 600px;
box-shadow: 0 0 40px rgb(86 142 242 / 10%);
`
const CTrack = styled.div `
background-clip: text;
 -webkit-background-clip: text;
 background-image: linear-gradient(45deg,rgb(241, 124, 28),#681f02);
-webkit-text-fill-color: transparent;
font-size: 80px;
font-weight: bold;
font-family: sfrounded;
`
const TImage = styled.img `
margin-top: 200px;
width: 80%;
height: 600px;
box-shadow: 0 0 40px rgb(86 142 242 / 10%);
`
const Button = styled.button `
margin-top: 70px;
width: 340px;
height: 70px;
background-color: #0569ff;
color: white;
font-size: larger;
font-weight: 700;
border: none ;
border-radius: 10px;
margin-bottom: 200px;
cursor: pointer;
`
const Footer = styled.div `
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;
// background-color: blue;
margin-top: 50px;
font-family: 'Montserrat';
font-style: normal;
font-size: x-large;
letter-spacing: 1px;
// text-align: center;
color: grey;
margin-bottom: 10px;
`
const White = styled.span `
color: white;
`
const Dots = styled.span `
font-size: 30px;
font-weight: bold;
`
const Logo1 = styled.img `
width: 100px;
height: 100px;
// margin-left: 40px;
`
// const Body = styled.div ``|
