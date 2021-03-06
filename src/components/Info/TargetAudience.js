import { IoIosCloseCircle } from 'react-icons/io';
import { Header, Title, Expander, Description } from './styles.js'
import { useState } from "react";
import styled from "styled-components";
import { GiOnTarget } from 'react-icons/gi';

export default function TargetAudience() {
    const [ isClicked, setIsClicked ] = useState(false)

    function toggle() {
        setIsClicked(prevState => !prevState)
    }

    return (
        <TargetAudienceContainer onClick={toggle}>
            <Header>
                <Title>Público Alvo</Title>
                {
                    isClicked
                        ? <IoIosCloseCircle size={28}  color="#191919"/>
                        : <GiOnTarget size={28} color="#191919"/>
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
                    Profissionais das áreas de educação
                    e saúde: Psicologia, Pedagogia, Educação Especial,
                    Terapia Ocupacional, Enfermagem, Fonoaudiologia e
                    áreas afins
                </Description>
            </Expander>
        </TargetAudienceContainer>
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

const TargetAudienceContainer = styled.div`
    width: 100%;
    margin: 10px 0px;
    max-width: 600px;
    border-bottom: 1px solid #191919;
    padding: 0px 10px 10px 10px;
    background-color: #EAFFD0;
    border-radius: 5px;
    cursor: pointer;
`
