import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
    
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 5px;
    position: relative;
    max-width: 100%;
    /* width: 1300px; */
    margin: 0 auto;
    color: white;
    overflow-x: hidden;

    &:before {
        content: '';
        background: url("./images/home-background.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
    }
`