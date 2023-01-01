import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="./images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-badag.jpg" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-badging.jpg" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;

    button {
        z-index: 1;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: white;
        }
    }

    li.slick-active button::before {
        color: white;
    }
    
    .slick-list {
        overflow: visible;
    }
`

const Wrap = styled.div`
    width: 50%;
    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 46px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        cursor: pointer;
        transition: 0.3s;


        &:hover {
            border: 4px solid rgba(240,240,240,0.7);
            transition: 0.3s;
            transform: scale(1.02);
        }
    }
`