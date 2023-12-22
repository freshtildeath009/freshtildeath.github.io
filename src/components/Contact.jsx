import React, { useState } from 'react'
import styled from 'styled-components'

const Contact = () => {
    const [isContactHover, setIsContactHover] = useState(false)
    const _handleContactHover = () => {
        let hover = isContactHover
        setIsContactHover(hover = true)
    }

    const _handleContactHoverLeave = () => {
        let hover = isContactHover
        setIsContactHover(hover = false)
    }
    return (
        <>
            <ContactSection>
                <span id='contact'></span>
                <img id='payaso' src="./images/payaso.png" alt="" />
                <h1 id="contact-text" onMouseOver={_handleContactHover} onMouseLeave={_handleContactHoverLeave}>{isContactHover ? "ME!" : "CONTACT"}</h1>
                <form className="form" action="https://formsubmit.co/27222e9217ad0a340851c1d4bddc0066" method="POST">
                    <input id="input" name='name' type="text" required="required" placeholder='your name' />
                    <input id="input" name='email' type="email" required="required" placeholder='your_email@gmail.com' />
                    <textarea type="text" name="message" id="input" cols="30" rows="10" required="required" placeholder='message me!'></textarea>
                    <button id="btn-message">Message!</button>
                </form>
            </ContactSection>
        </>
    )
}

export default Contact

const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: var(--bclr-contact);
    border-radius: 15px 15px 0 0;
    box-shadow: var(--bx-shdw-top);
    color: var(--tclr-secondary);
    font-family: var(--ff-general);
    margin: 2rem 0 0 0;
    padding: 0 0 2rem 0;

        #active{
            transition: ease-in-out 1s;
        }
        #payaso{
            height: var(--photo-art-sizexl);
            position: relative;
            top: 1rem;
        }
        
        #contact-text{
            font-size: var(--fs-titlel);
            width: 460px;
        }
        
        .form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 830px;
            padding-top: 1rem;
        }

        #input{
            padding: 1rem;
            height: 100%;
            width: 793px;
            margin-bottom: 0.5rem;
            border: none;
            font-size: font-size: var(--fs-paragraphl);
            background-color: var(--bclr-secondary);
        }

        #input:focus{
            background-color: rgb(24,26,27);
            color: var(--tclr-secondary);
        }
        #input:hover{
            background-color: rgb(24,26,27);
            color: var(--tclr-secondary);
            border: 1.5px solid white;
        }
        #btn-message{
            padding: 1rem;
            width: 350px;
            background-color: var(--bclr-secondary);
            border: none;
            cursor: pointer;    
            font-size: var(--fs-paragraphm);
            font-weight: var(--fw-paragraph);
        }

        #btn-message:hover{
            background-color: rgb(24,26,27);
            color: var(--tclr-secondary);
            border: 1.5px solid white;
        }
        @media (max-width: 1024px){
            #payaso{
                height: var(--photo-art-sizel);
            }

            #contact-text{
                font-size: var(--fs-titlel);
            }

            #input{
                width: 650px;
                font-size: var(--fs-paragraphm);
    
            }
    
            #btn-message{
                width: 300px;
            }
        }

        @media (max-width: 768px){
            #payaso{
                height: var(--photo-art-sizem);
            }

            #contact-text{
                font-size: var(--fs-titlem);
            }

            #input{
                width: 500px;
                font-size: 1rem;
    
            }
    
            #btn-message{
                width: 180px;
            }
        }

        @media (max-width: 550px){
            #payaso{
                height: var(--photo-art-sizexs);
            }

            #contact-text{
                margin-top: 1.5rem;
                font-size: 2rem;
            }

            #input{
                width: 320px;
                font-size: 1rem;
    
            }
    
            #btn-message{
                width: 150px;
                font-size: 0.9rem;
            }
        }

        @media (max-width: 320px){
            #payaso{
                height: var(--photo-art-sizexxs);
            }

            #contact-text{
                font-size: 1.6rem;
            }

            #input{
                width: 250px;
                font-size: 0.8rem;
    
            }
    
            #btn-message{
                font-size: 0.8rem;
                width: 110px;
            }
        }
`