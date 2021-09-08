import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
    return (
        <Container>
            <Wrap>This is the About Page</Wrap>
        </Container>
    )
}

export default AboutPage

const Container = styled.div `
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
color: white;
`
const Wrap = styled.div `
font-size: 20px;
font-weight: bold;
`