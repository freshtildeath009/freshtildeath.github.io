import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const HeaderHome = () => {

    const [isHome, setIsHome] = useState(true)

    const _handleHomeClick = () => {
        let home = isHome;
        setIsHome(home = true)
        window.scrollTo(0, 100)
    }

    const _handleBlogClick = () => {
        let home = isHome
        setIsHome(home = false)
    }

    const styles = {
        background: isHome ? "var(--bclr-header)" : "var(--bclr-contact)"
    }

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const _handleShowMobileMenu = (event) => {
        setShowMobileMenu(!showMobileMenu)
    }

    const _handleRemoveMenuOnScroll = (event) => {
        if (event.target.id !== "menu") {
            setShowMobileMenu(false)
        }
        console.log(screenTop);
    }
    window.addEventListener("click", _handleRemoveMenuOnScroll)
    return (
        <>

            <Header style={styles}>
                <nav >
                    <img id='logo' src="./images/logo.png" alt="" />
                    <div className='header-link-container'>
                        <Link onClick={_handleHomeClick} id='link' to='/' >HOME</Link>

                        {isHome &&
                            <>
                                <a id='link' href="#about">ABOUT</a>
                                <a id='link' href="#project">PROJECT</a>
                            </>
                        }
                        <Link onClick={_handleBlogClick} id='link' to='/blog'>BLOG</Link>
                        {isHome && <a id='link' href="#contact">CONTACT</a>}
                        <div className='menu-container'>
                            <a id='menu' href="#thinking" onClick={_handleShowMobileMenu}>X</a>
                        </div>
                    </div>
                </nav>

                {showMobileMenu &&
                    <div className='header-mobile-menu'>
                        <Link onClick={_handleHomeClick} id='mobile-link' to='/'>HOME</Link>

                        {isHome &&
                            <>
                                <a id='mobile-link' href="#about">ABOUT</a>
                                <a id='mobile-link' href="#project">PROJECT</a>
                            </>
                        }
                        <Link onClick={_handleBlogClick} id='mobile-link' to='/blog'>BLOG</Link>
                        {isHome && <a id='mobile-link' href="#contact">CONTACT</a>}
                    </div>
                }
            </Header>
        </>
    )
}

export default HeaderHome

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80px;
    background: var(--bclr-header);
    font-family: var(--ff-general);
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            position: fixed;
            // width: 100%;
            height: 70px;
            z-index: 1;
            transition: ease-in-out 0.5s;
            opacity: 0.1;
        }
        nav:hover{
            opacity: 1;
        }
        #logo{
            height: var(--fs-logo-header);
            margin-left: 2rem;
            cursor: pointer;
            position: relative;
            left: -15px;
            margin-bottom: 5px;
        }

        .header-link-container{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;
            overflow: hidden;
            font-weight: 700;
            border-radius: 50px;
            border: 1px solid black;
        }

        #link{
            font-size: var(--fs-paragraphl);
            color: var(--tclr-primary);
            padding: 1.3rem;
            background-color: var(--bclr-secondary);
            
        }

        #link:hover{
            opacity: 0.7;
        }

        .menu-container{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        #menu{
            display: none;
            justify-content: center;
            align-items: center;
            height: var(--fs-menu-header);
            height: 100%;
            color: var(--tclr-primary);
            cursor: pointer;
        }

        // Tablet
        @media (max-width: 768px) {
            #link{
                display: none;
            }

            #menu{
                display: block;
            }
        }

        .header-mobile-menu{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: fixed;
            top: 12%;
            background-color: white;
            padding: 2rem;
            border-radius: 50px;
            border: 2px solid black;
            z-index: 1;
        }

        #mobile-link{
            color: var(--tclr-primary);
            font-size: var(--fs-paragraphm);
            font-weight: var(--fw-paragraph);
        }
        #mobile-link:hover{
            text-decoration: line-through;
        }
`