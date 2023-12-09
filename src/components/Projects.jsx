import React from 'react'
import styled from 'styled-components'

const Projects = () => {
    return (
        <>
            <ProjectSection>

                <h1 id='project-text'>PROJECT</h1>
                <ProjectItems>

                    <div className='title1'>
                        <h1>E-Commerce</h1>
                    </div>
                    <div className='project1'>
                        <a href="https://incandescent-panda-26554f.netlify.app/">
                            <img id='project-photo' src="./images/ecommerce1.png" alt="" />
                        </a>
                    </div>
                </ProjectItems>
            </ProjectSection>

        </>
    )
}

export default Projects
const ProjectSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100vw;
    padding-bottom: 1.5rem;
    font-family: var(--ff-general);
    
        #project-text {
            font-size: var(--fs-titlel);
            opacity: 0.7; 
        }

        @media (max-width: 1024px){
            #project-text {
                font-size: var(--fs-titlel);
            }
        }

        @media (max-width: 768px){
            #project-text {
                font-size: var(--fs-titlem);
            }
        }

        @media (max-width: 550px){
            #project-text {
                font-size: var(--fs-titles);
            }
        }

        @media (max-width: 320px){
            #project-text {
                font-size: var(--fs-titlexs);
            }
        }
`
const ProjectItems = styled.div`
    display: grid;
    width: 96svw;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 30svh);
    border-radius: 15px;
    box-shadow: var(--bx-shdw-prjct);
    text-align: center;

        .title1{
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column: 1fr;
            background-image: var(--bclr1);
        }

        .project1{
            background-color: aliceblue;
            grid-column: 1fr;
            // background-image: url(./images/ecommerce1.png);
            // background-repeat: no-repeat;
            // background-position: center;
            // background-size: cover;
            overflow: hidden;
        }

        #project-photo{
            height: 100%;
            width: 100%;
            
            
        }
        @media (max-width: 768px){
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 30svh);
        }   
`