import { IoIosCloseCircle } from 'react-icons/io';
import { FaFeatherAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function Methodology() {
    const [ isClicked, setIsClicked ] = useState(false)

    function toggle() {
        setIsClicked(prevState => !prevState)
    }

    return (
        <MethodologyContainer onClick={toggle}>
            <Header>
                <Title>Metodologia</Title>
                {
                    isClicked
                        ? <IoIosCloseCircle size={28}  color="#191919"/>
                        : <FaFeatherAlt size={28} color="#191919"/>
                }
            </Header>
            <Expander
                initial="initial"
                animate={isClicked ? "animate" : "initial"}
                variants={variants}
            >
                <Description
                    animate={isClicked ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    A dinâmica metodológica envolverá o intercâmbio
                    de idéias e o processo integrado entre teoria e
                    prática com ênfase nas discussões e nos debates,
                    mediante a utilização do recurso pedagógico.<br />
                    - Atividades individuais e em grupo;
                    - Atividades práticas 
                </Description>
            </Expander>
        </MethodologyContainer>
    )
}

const variants = {
    initial: {
        height: 0,
        transition: {
            type: "spring",
            delay: .2,
            damping: 25,
            stiffness: 200
        },
    },
    animate: {
        height: "auto",
    },
}

const contentVariants = {
    initial: {
        opacity: 0,
        transition: {
            duration: .1,
        },
    },
    animate: {
        opacity: 1,
        transition: {
            delay: .2,
        },
    }
}

const MethodologyContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    max-width: 600px;
    border-bottom: 2px solid #191919;
    padding: 0px 10px 10px 10px;
    background-color: #95E1D3;
    border-radius: 5px;
    cursor: pointer;
`

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
`

const Expander = styled(motion.div)`
    width: 100%;
    display: block;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`

const Title = styled.p`
    font-size: 18px;
    font-weight: bolder;
    margin-right: 10px;
`

const Description = styled(motion.p)`
    font-size: 16px;
    line-height: 18px;
`
