import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="./images/viewers-disney.png"/>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-pixar.png"/>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-marvel.png"/>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-starwars.png"/>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-national.png"/>
        </Wrap>
        
    </Container>
  )
}

export default Viewers

const Container = styled.section`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 100%;
    gap: 20px;
    padding: 20px 0;
`

const Wrap = styled.div`

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid rgba(245,245,245,0.1);
    border-radius: 10px;
            box-shadow: rgb(0 0 0 / 69%) 0px 46px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
            border: 3px solid #edebeb;

    }
}`