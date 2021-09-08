import React from 'react'
import styled from "styled-components"
import Header from "./Header"
import Comps from "./Comps"
import Slider from "./Slider"
import Mycomp from "./Mycomp"
import Footer from "./Footer"
import apple from "./apple.jpeg"
import pic from "./img4.jpg"
import pic1 from "./img1.jpg"
import img from "./user.png"
import img1 from "./img3.png"
import img2 from "./img2.png"


const Homescreen = () => {
    return (
        <Container>
            <Header/>
            <Slider/>
            <Comps 
            change
            img={apple}
            head="Attribute commits with collaborators easily"
            paragraph="Quickly add co-authors to your commit. Great for paring 
            and excellend for sending a little love/credit to that special someone who
            helped fix that gurly bug of yours.
            See the attributes on the history page, undo accidental atributes, and"
            inparagraph="see the co-authors on github.com"
            />

            <Comps 
            clr
            img={pic1}
            head="Attribute commits with collaborators easily"
            paragraph="Quickly add co-authors to your commit. Great for paring 
            and excellend for sending a little love/credit to that special someone who
            helped fix that gurly bug of yours.
            See the attributes on the history page, undo accidental atributes, and"
            inparagraph="see the co-authors on github.com"
            />

            <Comps 
            change
            img={pic}
            head="Attribute commits with collaborators easily"
            paragraph="Quickly add co-authors to your commit. Great for paring 
            and excellend for sending a little love/credit to that special someone who
            helped fix that gurly bug of yours.
            See the attributes on the history page, undo accidental atributes, and"
            inparagraph="see the co-authors on github.com"
            />
            <Count>
            <Mycomp
            img={img1}
            headmy="Expanded image diff support"
            paragraphmy="Easily compare changed ages. See the
            before and after, swipe or fade between the two,
             or look at just the changed parts"
            />
            <Mycomp
            img={img}
            headmy="Expanded image diff support"
            paragraphmy="Easily compare changed ages. See the
            before and after, swipe or fade between the two,
             or look at just the changed parts"
            />
            <Mycomp
            img={img2}
            headmy="Expanded image diff support"
            paragraphmy="Easily compare changed ages. See the
            before and after, swipe or fade between the two,
             or look at just the changed parts"
            />
            </Count>
            <Footer/>
        </Container>
    )
}

export default Homescreen

const Container = styled.div `
width: 100%;
// height: 100vh;
background-color: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
::-webkit-scrollbar {
    width: 20px;
}
::-webkit-scrollbar-track {
    background-color: whitesmoke;
}
::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 100%;
    border: 5px solid transparent;
    background-clip: content-box;

}
::-webkit-scrollbar-thumb:hover {
    background-color: grey;
}
`
const Count = styled.div `
width: 100%;
display: flex;
justify-content: space-around;
margin-top: 50px;
`


