import React, { useState } from 'react'
import styled from 'styled-components'

const About = () => {
    const [isHover, setIsHover] = useState(false)
    const _handlePhotoHoverEnter = () => {
        let hover = isHover
        setIsHover(hover = true)

    }

    const _handlePhotoHoverLeave = () => {
        let hover = isHover
        setIsHover(hover = false)
    }

    const _handlePhotoClick = () => {
        setIsHover(!isHover)
    }

    const onScrollChangePhoto = () => {
        if (window.scrollY > 200 && window.scrollY <= 600) {
            setIsHover(true);
        } else {
            setIsHover(false);
        }
    }

    window.addEventListener("scroll", onScrollChangePhoto);
    return (
        <>
            <AboutSection>
                <div id='about' className='profile0'>
                    <img id='profile0' src={isHover ? "./images/profile1.png" : "./images/profile0.png"} onMouseLeave={_handlePhotoHoverLeave} onMouseEnter={_handlePhotoHoverEnter} alt="" onClick={_handlePhotoClick} />
                </div>

                <div className="text">
                    <h1 id='about-text'>ABOUT</h1>
                    <p id='about-paragraph'>Hello! I'm Pingu and front-end web developer from the Philippines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas eveniet<span id='project'></span> eum quis tenetur eaque fugiat dolore. Ratione quaerat odio aspernatur repellendus. Neque, modi! Quia excepturi sequi distinctio voluptatem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel enim, eaque fuga  ratione officiis dolore possimus. Eaque, aut doloremque, dolorum voluptatum at reiciendis dolores nobis rerum, similique in ex. </p>
                </div>

            </AboutSection>
        </>
    )
}

export default About

const AboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin: 2rem;
    font-family: sans-serif;
    
        .profile0{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
            position: absolute;
            bottom: -260px;
            cursor: pointer;
        }
        
        #profile0{
            height: var(--photo-art-sizel);
            width: 520px;
        }

        .text{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding-top: 200px;
        }

        #about-text{
            font-size: var(--fs-titlel);
            font-weight:   var(--fw-title);
            opacity: 0.7; 
        }

        #about-paragraph{
            font-size: var(--fs-paragraphl);
            width: 80%;
        }

        // Device
        @media (max-width: 1440px) {
            .text{
                padding-top: 200px;
            }
            
        }
        @media (max-width: 1024px){
            .profile0{
                bottom: -150px;
            }
            #profile0{
                bottom: -10px;
                height: var(--photo-art-sizem);
                width: 100%;
            }
            .text{
                padding-top: 150px;
            }
            #about-text{
                font-size: var(--fs-titlel);
            }
            #about-paragraph{
                font-size: var(--fs-paragraphm)
            }
        }
        @media (max-width: 930px){
            .profile0{
                bottom: -160px;
            }
            .text{
                padding-top: 135px;
            }
        }
        @media (max-width: 768px){
            .profile0{
                bottom: -150px;
            }
            #profile0{
                height: var(--photo-art-sizes);
            }
            .text{
                padding-top: 120px;
            }
            #about-text{
                font-size: var(--fs-titlem);
            }
            #about-paragraph{
                font-size: var(--fs-paragraphm)
            }
        }
        
        @media (max-width: 550px){
            .profile0{
                bottom: -120px;
            }
            #profile0{
                bottom: -5px;
                height: 200px;
            }
            .text{
                padding-top: 80px;
            }
            #about-text{
                font-size: 2rem;
            }
            #about-paragraph{
               font-size: 0.8em;;
            }
        }

        @media (max-width: 480px){
            .profile0{
                bottom: -100px;
            }

            .text{
                padding-top: 50px;
            }
        }

        @media (max-width: 380px){
            .profile0{
                bottom: -110px;
            }

            .text{
                padding-top: 60px;
            }

            #about-paragraph{
                font-size: 0.8em;
                width: 80%;
            }
        }

        @media (max-width: 320px){
            .profile0{
                bottom: -97px;
            }
            #profile0{
                bottom: -5px;
                height: var(--photo-art-sizexxs);
            }
            .text{
                padding-top: 40px;
            }

            #about-text{
                font-size: 1.6rem;
            }
           
        }
`