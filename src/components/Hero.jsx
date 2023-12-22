import React from 'react'
import styled from 'styled-components'
const Hero = () => {
    return (
        <>
            <HeroSection>
                <p id='thinking'></p>
                <h1 id='hero-name'>@Object_Vis</h1>
                <h4 id='hero-job'>Web Developer</h4>

            </HeroSection>
        </>
    )
}

export default Hero

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 92svh;
    background-image: var(--bclr);
    border-radius: 0 0 15px 15px;
    box-shadow: var(--bx-shdw-bottom);
    font-family: var(--ff-general);
        #hero-name{
            font-size: var(--fs-namel);
            font-weight: 900;
        }

        #hero-job{
            font-size: var(--fs-paragraphl);
            font-weight: var(--fw-subtitle);
        }

        @media (max-width: 1024px){
            #hero-name{
                font-size: var(--fs-namem);
            }
        }

        @media (max-width: 768px){

            #hero-name{
                font-size: var(--fs-titlem);
            }

            #hero-job{
                font-size: var(--fs-paragraphm);
            }
        }
        
        @media (max-width: 550px){

            #hero-name{
                font-size: var(--fs-titlexxs);
            }

            #hero-job{
                font-size: var(--fs-paragraphs);
            }
        }

        @media (max-width: 450px){

            #hero-name{
                font-size: 2rem;
            }

            #hero-job{
                font-size: var(--fs-paragraphs);
            }
        }
        @media (max-width: 320px) {
            #hero-name{
                font-size: var(--fs-titlexxxs);
            }
            #hero-job{
                font-size: var(--fs-0-9);
            }
        }

        
`