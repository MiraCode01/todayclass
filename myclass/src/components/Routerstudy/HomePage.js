import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
    return (
        <Container>
            <Wrap>This is the Home Page</Wrap>
        </Container>
    )
}

export default HomePage

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