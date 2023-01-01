import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    
    <Container>
        <Nav>

            <LogoContainer>

            <Logo src="./images/logo.svg" />
            </LogoContainer>
            <NavMenu>
                <a href="#">
                    <img src="./images/home-icon.svg" alt="" />
                    <span>Home</span>
                </a>
                <a href="#">
                    <img src="./images/search-icon.svg" alt="" />
                    <span>Search</span>
                </a>
                <a href="#">
                    <img src="./images/watchlist-icon.svg" alt="" />
                    <span>Watch List</span>
                </a>
                <a href="#">
                    <img src="./images/original-icon.svg" alt="" />
                    <span>Originals</span>
                </a>
                <a href="#">
                    <img src="./images/movie-icon.svg" alt="" />
                    <span>Movies</span>
                </a>
                <a href="#">
                    <img src="./images/series-icon.svg" alt="" />
                    <span>Series</span>
                </a>
            </NavMenu>
        </Nav>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 70px;
background-color: #090b13;
`

const Nav = styled.header`
    color: #e2e2e2;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    max-width: 100%;
    width: 1500px;
    margin: 0 auto;
`
const LogoContainer = styled.div`
    width: 20%;
    height: auto;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 80%;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        color: #e2e2e2;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.8rem;

        img {
            width: 20px;
            height: 100%;
        }
    
        span {

            letter-spacing: 1.2px;
            position: relative;

            &:hover:after {
                left: 0;
                opacity: 1;
                transition: all .2s;
            }
    
            &:after {
                content: '';
                height: 2px;
                background-color: #e2e2e2;
                position: absolute;
                width: 100%;
                top: 16px;
                left: -100%;
                opacity: 0;
                transition: all .2s;
            }
        }
    }
`